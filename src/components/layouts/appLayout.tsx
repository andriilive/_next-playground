import React, { ComponentPropsWithoutRef } from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { GithubIcon } from 'lucide-react'
import { DefaultSeo, NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { seoDefaultConfig } from '@/config'
import {
  navLinks,
  project_gh_url,
  project_name,
  PROJECT_URL_PROD,
} from '@/data'

const font = Inter({
  subsets: ['cyrillic', 'latin-ext'],
  variable: '--font-sans',
})

interface IAppLayout extends ComponentPropsWithoutRef<'div'> {}

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  const { t } = useTranslation()
  return (
    <>
      <DefaultSeo {...seoDefaultConfig} canonical={PROJECT_URL_PROD} />
      <NextSeo
        additionalMetaTags={[
          {
            name: 'author',
            content: '/humans.txt',
          },
        ]}
      />
      <div
        aria-description={'theme-wrapper'}
        className={`font-sans antialiased ${font.variable}`}
      >
        <section className="brand-white border-b-2 border-slate-200 dark:border-slate-600">
          <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
            <div>
              <Link href={'/'} className={'text-base font-extrabold'}>
                {project_name}
              </Link>
            </div>
            {/* menu */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="hidden items-center border-r-2 lg:flex">
                {navLinks.map(({ href, description, title }, i) => (
                  <div className="mr-2" key={i}>
                    <Link
                      href={href}
                      title={description || title}
                      className="text-md inline-block rounded-md px-4 font-medium no-underline hover:text-primary focus:text-primary dark:text-gray-200"
                    >
                      {title}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <a
                  href={project_gh_url}
                  target={'_blank'}
                  rel={'noreferrer nofollow'}
                  className={'flex items-center'}
                >
                  <GithubIcon className="h-4" />
                  <span>{t('str')}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <main className="container py-4">{children}</main>
      </div>
    </>
  )
}

export default AppLayout
