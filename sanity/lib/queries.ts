import { defineQuery } from 'next-sanity'

export const BLOGS_QUERY = defineQuery(`
  *[_type == "blog" && ($category == "All" || category == $category)] | order(_createdAt desc) {
    _id,
    title,
    slug { current },
    excerpt,
    image { asset -> { url }, alt },
    author -> { name },
    date,
    readTime,
    category,
    tags,
    views
  }
`)

export const POST_BY_ID_QUERY = defineQuery(`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug { current },
    excerpt,
    content,
    image { asset -> { url }, alt },
    author -> { name },
    _createdAt,
    readTime,
    category,
    tags,
    views
  }
`)

export const POST_VIEWS_QUERY = defineQuery(`
 *[_type == "blog" && _id == $id][0] {
    _id,
    views
  }
`)

// Get all portfolio projects with optional category filter
export const PORTFOLIO_QUERY = defineQuery(`
  *[_type == "project" && ($category == "All" || category == $category)] | order(_createdAt desc) {
    _id,
    title,
    slug { current },
    subtitle,
    description,
    longDescription,
    featuredImage { 
      asset -> { url },
      alt 
    },
    category,
    status,
    client,
    duration,
    date,
    technologies,
    _createdAt
  }
`)

// Get single portfolio project by slug
export const PORTFOLIO_BY_SLUG_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug { current },
    subtitle,
    description,
    longDescription,
    category,
    status,
    featuredImage { 
      asset -> { url },
      alt 
    },
    client,
    duration,
    date,
    technologies,
    
    // Development fields
    category == "Development" => {
      team,
      launchDate,
      url,
      githubUrl,
      overview,
      challenge,
      solution,
      results[] {
        metric,
        label
      },
      techStack[] {
        name,
        category
      },
      features,
      projectImages[] {
        asset -> { url },
        alt
      }
    },
    
    // Design fields
    category == "Design" => {
      services,
      deliveryDate,
      designOverview,
      designChallenge,
      designSolution,
      brandColors[] {
        name,
        hex,
        usage
      },
      typography {
        primary,
        secondary,
        mono
      },
      designPrinciples[] {
        title,
        description
      },
      deliverables,
      designImages {
        hero { asset -> { url } },
        logo { asset -> { url } },
        colors { asset -> { url } },
        typography { asset -> { url } },
        components { asset -> { url } },
        mockups { asset -> { url } },
        guidelines { asset -> { url } },
        marketing { asset -> { url } }
      },
      impactMetrics[] {
        value,
        label
      },
      impactDescription
    },
    
    // Photography fields
    category == "Photography" => {
      location,
      style,
      equipment,
      story,
      approach,
      impact,
      gallery[] {
        image { asset -> { url } },
        caption,
        location,
        alt
      },
      featured
    },
    
    // Common testimonial field
    testimonial {
      quote,
      author,
      position,
      avatar { asset -> { url } }
    },
    
    _createdAt
  }
`)

// Get portfolio count by category
export const PORTFOLIO_COUNT_QUERY = defineQuery(`
  {
    "total": count(*[_type == "project"]),
    "development": count(*[_type == "project" && category == "Development"]),
    "design": count(*[_type == "project" && category == "Design"]),
    "photography": count(*[_type == "project" && category == "Photography"])
  }
`)
