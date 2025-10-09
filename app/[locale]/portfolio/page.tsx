import { PORTFOLIO_QUERY } from '@/sanity/lib/queries'
import { PortfolioContent } from '@/components/PortfolioContent'
import { Project } from '@/sanity/sanity.types'
import { sanityFetch, SanityLive } from '@/sanity/lib/live'

export type PortfolioType = Project

interface PortfolioPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function PortfolioPage({
  searchParams,
}: PortfolioPageProps) {
  // Await the searchParams promise
  const resolvedSearchParams = await searchParams
  const selectedCategory = resolvedSearchParams.category || 'All'

  const { data: portfolioProjects } = await sanityFetch({
    query: PORTFOLIO_QUERY,
    params: { category: selectedCategory },
  })

  const categories = ['All', 'Development', 'Design', 'Photography']

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter(
          (project: PortfolioType) => project.category === selectedCategory
        )

  return (
    <>
      <PortfolioContent
        portfolioProjects={filteredProjects}
        selectedCategory={selectedCategory}
        categories={categories}
        totalProjects={portfolioProjects.length}
      />

      <SanityLive />
    </>
  )
}
