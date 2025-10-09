import { defineField, defineType } from 'sanity'

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule) => Rule.required().error('Excerpt is required'),
    }),
    defineField({
      name: 'content',
      type: 'markdown',
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required().error('Alt text is required'),
        },
      ],
      validation: (Rule) => Rule.required().error('Featured image is required'),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'date',
      title: 'Publication Date',
      type: 'date',
      options: {
        dateFormat: 'MMM DD, YYYY',
      },
      validation: (Rule) =>
        Rule.required().error('Publication date is required'),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      validation: (Rule) => Rule.required().error('Read time is required'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Development', value: 'Development' },
          { title: 'Design', value: 'Design' },
          { title: 'Product', value: 'Product' },
          { title: 'Technology', value: 'Technology' },
        ],
      },
      validation: (Rule) => Rule.required().error('Category is required'),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule) =>
        Rule.required().min(1).error('At least one tag is required'),
    }),
    defineField({
      name: 'views',
      title: 'Views',
      type: 'number',
    }),
  ],
})
