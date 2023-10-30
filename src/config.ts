import { siteConfig as siteConfigRaw } from '@/../config'

type Site = typeof siteConfigRaw
export const site: Site = siteConfigRaw
export { seoDefaultConfig as seoDefaultConfig } from '@/../config'
