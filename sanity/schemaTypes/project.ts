import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
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
      validation: (Rule) => Rule.required().error('Slug is required'),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required().error('Subtitle is required'),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.required().error('Description is required'),
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      type: 'text',
      validation: (Rule) =>
        Rule.required().error('Long description is required'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Development', value: 'Development' },
          { title: 'Design', value: 'Design' },
          { title: 'Photography', value: 'Photography' },
        ],
      },
      validation: (Rule) => Rule.required().error('Category is required'),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Live', value: 'Live' },
          { title: 'Beta', value: 'Beta' },
          { title: 'Completed', value: 'Completed' },
        ],
      },
      validation: (Rule) => Rule.required().error('Status is required'),
    }),
    defineField({
      name: 'featuredImage',
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
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (Rule) => Rule.required().error('Client is required'),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      validation: (Rule) => Rule.required().error('Duration is required'),
    }),
    defineField({
      name: 'date',
      title: 'Project Date',
      type: 'date',
      options: {
        dateFormat: 'MMM YYYY',
      },
      validation: (Rule) => Rule.required().error('Project date is required'),
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies/Tools',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .error('At least one technology/tool is required'),
    }),

    // Development-specific fields
    defineField({
      name: 'team',
      title: 'Team Size',
      type: 'string',
      hidden: ({ document }) => document?.category !== 'Development',
    }),
    defineField({
      name: 'launchDate',
      title: 'Launch Date',
      type: 'string',
      hidden: ({ document }) => document?.category !== 'Development',
    }),
    defineField({
      name: 'url',
      title: 'Live URL',
      type: 'url',
      hidden: ({ document }) => document?.category !== 'Development',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      hidden: ({ document }) => document?.category !== 'Development',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      hidden: ({ document }) => document?.category !== 'Development',
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      hidden: ({ document }) => document?.category !== 'Development',
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'text',
      hidden: ({ document }) => document?.category !== 'Development',
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'metric', type: 'string', title: 'Metric' },
            { name: 'label', type: 'string', title: 'Label' },
          ],
        },
      ],
      hidden: ({ document }) => document?.category !== 'Development',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'category', type: 'string', title: 'Category' },
          ],
        },
      ],
      hidden: ({ document }) => document?.category !== 'Development',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: ({ document }) => document?.category !== 'Development',
    }),
    defineField({
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
          ],
        },
      ],
      hidden: ({ document }) => document?.category !== 'Development',
    }),

    // Design-specific fields
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Brand Identity', value: 'Brand Identity' },
          { title: 'UI/UX Design', value: 'UI/UX Design' },
          { title: 'Design System', value: 'Design System' },
        ],
      },
      hidden: ({ document }) => document?.category !== 'Design',
    }),
    defineField({
      name: 'deliveryDate',
      title: 'Delivery Date',
      type: 'string',
      hidden: ({ document }) => document?.category !== 'Design',
    }),
    defineField({
      name: 'designOverview',
      title: 'Overview',
      type: 'text',
      hidden: ({ document }) => document?.category !== 'Design',
    }),
    defineField({
      name: 'designChallenge',
      title: 'Challenge',
      type: 'text',
      hidden: ({ document }) => document?.category !== 'Design',
    }),
    defineField({
      name: 'designSolution',
      title: 'Solution',
      type: 'text',
      hidden: ({ document }) => document?.category !== 'Design',
    }),
    defineField({
      name: 'brandColors',
      title: 'Brand Colors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Color Name' },
            { name: 'hex', type: 'string', title: 'Hex Code' },
            { name: 'usage', type: 'string', title: 'Usage' },
          ],
        },
      ],
      hidden: ({ document }) => document?.category !== 'Design',
    }),
    defineField({
      name: 'typography',
      title: 'Typography',
      type: 'object',
      fields: [
        { name: 'primary', type: 'string', title: 'Primary Font' },
        { name: 'secondary', type: 'string', title: 'Secondary Font' },
        { name: 'mono', type: 'string', title: 'Monospace Font' },
      ],
      hidden: ({ document }) => document?.category !== 'Design',
    }),
    defineField({
      name: 'designPrinciples',
      title: 'Design Principles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        },
      ],
      hidden: ({ document }) => document?.category !== 'Design',
    }),
    defineField({
      name: 'deliverables',
      title: 'Deliverables',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: ({ document }) => document?.category !== 'Design',
    }),
    defineField({
      name: 'designImages',
      title: 'Design Images',
      type: 'object',
      fields: [
        { name: 'hero', type: 'image', title: 'Hero Image' },
        { name: 'logo', type: 'image', title: 'Logo Showcase' },
        { name: 'colors', type: 'image', title: 'Color Palette' },
        { name: 'typography', type: 'image', title: 'Typography' },
        { name: 'components', type: 'image', title: 'UI Components' },
        { name: 'mockups', type: 'image', title: 'Mockups' },
        { name: 'guidelines', type: 'image', title: 'Guidelines' },
        { name: 'marketing', type: 'image', title: 'Marketing Materials' },
      ],
      hidden: ({ document }) => document?.category !== 'Design',
    }),
    defineField({
      name: 'impactMetrics',
      title: 'Impact Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string', title: 'Value' },
            { name: 'label', type: 'string', title: 'Label' },
          ],
        },
      ],
      hidden: ({ document }) => document?.category !== 'Design',
    }),
    defineField({
      name: 'impactDescription',
      title: 'Impact Description',
      type: 'text',
      hidden: ({ document }) => document?.category !== 'Design',
    }),

    // Photography-specific fields
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      hidden: ({ document }) => document?.category !== 'Photography',
    }),
    defineField({
      name: 'style',
      title: 'Photography Style',
      type: 'string',
      options: {
        list: [
          { title: 'Landscape', value: 'Landscape' },
          { title: 'Portrait', value: 'Portrait' },
          { title: 'Event', value: 'Event' },
          { title: 'Commercial', value: 'Commercial' },
          { title: 'Documentary', value: 'Documentary' },
        ],
      },
      hidden: ({ document }) => document?.category !== 'Photography',
    }),
    defineField({
      name: 'equipment',
      title: 'Equipment',
      type: 'string',
      hidden: ({ document }) => document?.category !== 'Photography',
    }),
    defineField({
      name: 'story',
      title: 'The Story',
      type: 'text',
      hidden: ({ document }) => document?.category !== 'Photography',
    }),
    defineField({
      name: 'approach',
      title: 'My Approach',
      type: 'text',
      hidden: ({ document }) => document?.category !== 'Photography',
    }),
    defineField({
      name: 'impact',
      title: 'Impact',
      type: 'text',
      hidden: ({ document }) => document?.category !== 'Photography',
    }),
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            },
            { name: 'caption', type: 'string', title: 'Caption' },
            { name: 'location', type: 'string', title: 'Location' },
            { name: 'alt', type: 'string', title: 'Alt Text' },
          ],
        },
      ],
      hidden: ({ document }) => document?.category !== 'Photography',
      validation: (Rule) =>
        Rule.custom((gallery, context) => {
          if (
            context.document?.category === 'Photography' &&
            (!gallery || gallery.length === 0)
          ) {
            return 'At least one image is required for photography projects'
          }
          return true
        }),
    }),
    defineField({
      name: 'featured',
      title: 'Featured In',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: ({ document }) => document?.category !== 'Photography',
    }),

    // Common testimonial field
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        { name: 'quote', type: 'text', title: 'Quote' },
        { name: 'author', type: 'string', title: 'Author Name' },
        { name: 'position', type: 'string', title: 'Position' },
        {
          name: 'avatar',
          type: 'image',
          title: 'Avatar',
          options: { hotspot: true },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      status: 'status',
      media: 'featuredImage',
    },
    prepare(selection) {
      const { title, category, status, media } = selection
      return {
        title: title,
        subtitle: `${category} • ${status}`,
        media: media,
      }
    },
  },
})
