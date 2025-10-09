import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { blog } from './blog'
import { project } from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, blog, project],
}
