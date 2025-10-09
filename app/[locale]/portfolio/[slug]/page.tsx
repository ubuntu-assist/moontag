import { client } from '@/sanity/lib/client'
import { PORTFOLIO_BY_SLUG_QUERY } from '@/sanity/lib/queries'
import DevelopmentProjectDetails from '@/components/DevelopmentProjectDetails'
import DesignProjectDetails from '@/components/DesignProjectDetails'
import PhotographyProjectDetails from '@/components/PhotographyProjectDetails'
import { Project } from '@/sanity/sanity.types'

interface PortfolioProjectPageProps {
  params: Promise<{ slug: string }>
}

export default async function PortfolioProjectPage({
  params,
}: PortfolioProjectPageProps) {
  // Await the params promise
  const { slug } = await params

  const project: Project | null = await client.fetch(PORTFOLIO_BY_SLUG_QUERY, {
    slug: slug, // Use the awaited slug
  })

  if (!project) {
    return (
      <main className='bg-white min-h-screen'>
        <section className='pt-24 pb-16'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <h1 className='text-4xl font-bold text-gray-900 mb-6'>
              Project Not Found
            </h1>
            <p className='text-xl text-gray-600 mb-8'>
              The project you&apos;re looking for couldn&apos;t be found.
            </p>
          </div>
        </section>
      </main>
    )
  }

  switch (project.category) {
    case 'Development':
      return <DevelopmentProjectDetails project={project} />
    case 'Design':
      return <DesignProjectDetails project={project} />
    case 'Photography':
      return <PhotographyProjectDetails project={project} />
    default:
      return (
        <main className='bg-white min-h-screen'>
          <section className='pt-24 pb-16'>
            <div className='max-w-4xl mx-auto px-6 text-center'>
              <h1 className='text-4xl font-bold text-gray-900 mb-6'>
                Invalid Project Category
              </h1>
            </div>
          </section>
        </main>
      )
  }
}
