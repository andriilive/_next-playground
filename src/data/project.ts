import projectJson from '@/../package.json'

export const project_name: string = projectJson.name
export const project_author: typeof projectJson.author = projectJson.author
export const project_gh_url: string = projectJson.repository.url.replace(
  'git+',
  ''
)
export const PROJECT_URL_PROD: string = projectJson.homepage
