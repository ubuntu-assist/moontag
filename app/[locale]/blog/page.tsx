import { BLOGS_QUERY } from '@/sanity/lib/queries'
import { BlogContent } from '@/components/BlogContent'
import { Author, Blog } from '@/sanity/sanity.types'
import { sanityFetch, SanityLive } from '@/sanity/lib/live'

export type BlogType = Omit<Blog, 'author'> & { author?: Author }

interface BlogPageProps {
  searchParams: Promise<{ category?: string; page?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  // Await the searchParams promise
  const resolvedSearchParams = await searchParams
  const selectedCategory = resolvedSearchParams.category || 'All'
  const currentPage = Math.max(
    1,
    parseInt(resolvedSearchParams.page || '1', 10)
  )
  const postsPerPage = 6

  const { data: blogPosts } = await sanityFetch({
    query: BLOGS_QUERY,
    params: { category: selectedCategory },
  })

  const featuredPost = blogPosts[0]

  const categories = [
    'All',
    'Development',
    'Design',
    'Fintech',
    'Security',
    'Community',
  ]

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts.slice(1)
      : blogPosts.filter(
          (post: BlogType) =>
            post.category === selectedCategory && post._id !== featuredPost?._id
        )

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  return (
    <>
      <BlogContent
        featuredPost={featuredPost}
        paginatedPosts={paginatedPosts}
        selectedCategory={selectedCategory}
        currentPage={currentPage}
        totalPages={totalPages}
        categories={categories}
        totalPosts={blogPosts.length}
      />

      <SanityLive />
    </>
  )
}
