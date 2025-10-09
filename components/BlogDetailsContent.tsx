import {
  ArrowLeft,
  Clock,
  User,
  Share2,
  Bookmark,
  Code,
  Copy,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import markdownit from 'markdown-it'
import { BlogType } from '@/app/[locale]/blog/page'
import { Suspense } from 'react'
import Skeleton from './ui/Skeleton'
import View from './View'
import Link from 'next/link'

interface BlogDetailsContentProps {
  post: BlogType | null
}

export default function BlogDetailsContent({ post }: BlogDetailsContentProps) {
  const md = markdownit({
    html: true,
    linkify: true,
    typographer: true,
  })
  const parsedContent = md.render(post?.content || '')

  if (!post) {
    return (
      <main className='bg-white min-h-screen'>
        <section className='pt-24 pb-16'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <div>
              <h1 className='text-4xl font-bold text-gray-900 mb-6'>
                Article Not Found
              </h1>
              <p className='text-xl text-gray-600 mb-8'>
                The technical article you&apos;re looking for couldn&apos;t be
                found.
              </p>
              <Button
                className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white px-8 py-3'
                asChild
              >
                <Link href='/blog'>
                  <ArrowLeft className='mr-2 h-4 w-4' />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className='bg-white min-h-screen'>
      {/* Navigation */}
      <section className='bg-gray-900 text-white border-b-4 border-[#00BCD4]'>
        <div className='max-w-6xl mx-auto px-6 pt-24 pb-6'>
          <Button
            variant='ghost'
            className='text-gray-300 hover:text-white hover:bg-gray-800 p-2 font-mono'
            asChild
          >
            <Link href='/blog'>
              <Code className='mr-2 h-4 w-4' />
              cd ../blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <article className='max-w-6xl mx-auto px-6 py-12'>
        <header className='mb-12'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Main Content */}
            <div className='lg:col-span-2'>
              <div className='mb-6'>
                <div className='flex items-center gap-3 mb-4'>
                  {post.category && (
                    <Badge
                      variant='outline'
                      className='border-[#00BCD4] text-[#00BCD4] hover:bg-[#00BCD4] hover:text-white font-mono'
                    >
                      {post.category}
                    </Badge>
                  )}
                </div>

                <h1 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6'>
                  {post.title}
                </h1>

                {post.excerpt && (
                  <p className='text-xl text-gray-600 leading-relaxed mb-6'>
                    {post.excerpt}
                  </p>
                )}

                {/* Tags */}
                {(post.tags || []).length > 0 && (
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {(post.tags || []).map((tag) => (
                      <Badge
                        key={tag}
                        variant='secondary'
                        className='font-mono text-xs'
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Author and Meta Info */}
              <div className='flex items-center justify-between mb-8 pb-6 border-b border-gray-200'>
                <div className='flex items-center space-x-4 text-sm text-gray-500 font-mono'>
                  {post.author?.name && (
                    <div className='flex items-center space-x-2'>
                      <User className='h-4 w-4' />
                      <span className='font-medium text-gray-900'>
                        {post.author.name}
                      </span>
                    </div>
                  )}
                  {post.readTime && (
                    <div className='flex items-center space-x-2'>
                      <Clock className='h-4 w-4' />
                      <span>{post.readTime}</span>
                    </div>
                  )}
                </div>

                <div className='flex items-center space-x-2'>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-gray-500 hover:text-[#00BCD4] hover:bg-gray-50'
                  >
                    <Share2 className='h-4 w-4' />
                  </Button>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-gray-500 hover:text-[#4CAF50] hover:bg-gray-50'
                  >
                    <Bookmark className='h-4 w-4' />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className='lg:col-span-1'>
              <div className='bg-gray-50 rounded-lg p-6 sticky top-24'>
                <h3 className='font-bold text-gray-900 mb-4 flex items-center'>
                  <Code className='mr-2 h-5 w-5' />
                  Article Info
                </h3>
                <div className='space-y-4'>
                  <div>
                    <label className='text-sm font-medium text-gray-700 mb-2 block'>
                      Quick Actions
                    </label>
                    <div className='space-y-2'>
                      <Button
                        variant='outline'
                        size='sm'
                        className='w-full justify-start text-xs'
                      >
                        <Copy className='mr-2 h-3 w-3' />
                        Copy Article Link
                      </Button>
                      <Button
                        variant='outline'
                        size='sm'
                        className='w-full justify-start text-xs'
                      >
                        <Bookmark className='mr-2 h-3 w-3' />
                        Save for Later
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className='text-sm font-medium text-gray-700 mb-2 block'>
                      Article Info
                    </label>
                    <div className='text-xs text-gray-600 font-mono space-y-1'>
                      {post.category && <div>Category: {post.category}</div>}
                      {post.readTime && <div>Read Time: {post.readTime}</div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className='mb-12 mt-8'>
            <div className='relative h-96 rounded-lg overflow-hidden border-2 border-gray-200'>
              <img
                src={post?.image?.asset?.url}
                alt={post?.image?.alt}
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </header>

        {/* Article Content */}
        {parsedContent && (
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2'>
              <div
                className='prose prose-lg prose-gray max-w-none'
                dangerouslySetInnerHTML={{ __html: parsedContent }}
              />

              {/* Article Footer */}
              <footer className='mt-16 pt-8 border-t border-gray-200'>
                <div className='bg-gray-50 rounded-lg p-6'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4'>
                      {post.author?.name && (
                        <div className='w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-mono font-bold'>
                          {post.author.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                      )}
                      <div>
                        {post.author?.name && (
                          <div className='font-bold text-gray-900'>
                            {post.author.name}
                          </div>
                        )}
                        <div className='text-sm text-gray-600 font-mono'>
                          Senior Engineer
                        </div>
                      </div>
                    </div>

                    <div className='flex items-center space-x-3'>
                      <Button
                        variant='outline'
                        size='sm'
                        className='border-gray-300 text-gray-700 hover:border-[#00BCD4] hover:text-[#00BCD4]'
                      >
                        <Share2 className='h-4 w-4 mr-2' />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </footer>
            </div>

            {/* Sticky Sidebar (empty column for spacing) */}
            <div className='lg:col-span-1'></div>
          </div>
        )}

        <Suspense fallback={<Skeleton className='view_skeleton' />}>
          <View id={post._id} />
        </Suspense>
      </article>

      {/* Newsletter CTA */}
      <section className='py-16 bg-gray-900 text-white'>
        <div className='max-w-6xl mx-auto px-6 text-center'>
          <div>
            <h2 className='text-3xl font-bold mb-4'>
              Stay Updated on Technical Insights
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Get the latest development best practices and technical insights
              delivered to your inbox
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white px-8 py-3 text-base font-medium'
                asChild
              >
                <Link href='/subscribe'>
                  <Code className='mr-2 h-4 w-4' />
                  Subscribe to Updates
                </Link>
              </Button>
              <Button
                variant='outline'
                className='border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-[#00BCD4] px-8 py-3 text-base font-medium'
                asChild
              >
                <Link href='/blog'>More Technical Articles</Link>
              </Button>
            </div>
            <div className='mt-8 text-sm text-gray-400 font-mono'>
              Technical insights from the African development ecosystem
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
