declare module '*.mdx' {
  let MDXComponent: (props: any) => React.JSX.Element

  interface MarkdownAttributes {
    readonly title: string
    readonly author: string
    // include other known properties or use [key: string]: any for additional dynamic keys
  }

  const content: {
    attributes: MarkdownAttributes
    html: string
    react: React.ReactNode
  }

  export default MDXComponent
}
