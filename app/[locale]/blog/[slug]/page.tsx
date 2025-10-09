import { client } from '@/sanity/lib/client'
import { POST_BY_ID_QUERY } from '@/sanity/lib/queries'
import BlogDetailsContent from '@/components/BlogDetailsContent'
import { BlogType } from '../page'

interface BlogDetailsPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  // Await the params promise
  const { slug } = await params

  const post: BlogType | null = await client.fetch(POST_BY_ID_QUERY, {
    slug: slug, // Use the awaited slug
  })

  return <BlogDetailsContent post={post} />
}
