export type Data = {
  name: string
}

export type PageLinkProps = {
  title: string
  description?: string
  href: string
}

export interface IPostMeta {
  excerpt: string
  slug: string
  title: string
  tags: string[]
  date: string
  image: string
}

export interface IPost {
  content: string
  meta: IPostMeta
}
