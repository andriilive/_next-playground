import { PageLinkProps } from '@/types'

export * from '@/data/project'

export const navLinks: PageLinkProps[] = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/components',
    title: 'Components',
  },
  {
    href: '/mdx',
    title: 'Mdx Page (.mdx)',
  },
  {
    href: '/mdx-loader',
    title: 'Mdx Static Import',
  },
  {
    href: '/md-loader',
    title: 'Md Import',
  },
]
