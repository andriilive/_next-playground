import React from 'react'
import Image from 'next/image'
import type { MDXComponents } from 'mdx/types'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

const YouTube = ({ id }: { id: string }) => {
  return (
    <div className="relative my-10 h-0 max-w-full overflow-hidden rounded-lg pb-[56.25%]">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className="absolute left-0 top-0 h-full w-full border-0"
      />
    </div>
  )
}

const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" {...props} />
)
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    youtube: YouTube,
    // Allows customizing built-in components, e.g. to add styling.
    img: ResponsiveImage,
    h1: ({ children }) => (
      <h1 className={'mdx-title'} style={{ fontSize: '100px' }}>
        {children}
      </h1>
    ),
    h2: ({ children }) => <h2 className={'mdx-title'}>{children}</h2>,
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <article id={'md-wrapper'}>{children}</article>
    ),
    ...components,
  }
}
