import { MDXProvider } from '@mdx-js/react'
import { useMDXComponents } from '@/mdx-components'
import PostMDXContent from '@/posts/example.mdx'

export default function MdxLoader() {
  return (
    <MDXProvider components={useMDXComponents}>
      <PostMDXContent />
    </MDXProvider>
  )
}
