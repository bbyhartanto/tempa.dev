const collectionNames = {
  en: {
    services: 'servicesEn',
    caseStudies: 'caseStudiesEn',
    blog: 'blogEn'
  },
  id: {
    services: 'servicesId',
    caseStudies: 'caseStudiesId',
    blog: 'blogId'
  }
} as const

export function useContentCollections() {
  const { locale } = useI18n()

  return computed(() => collectionNames[locale.value as keyof typeof collectionNames] ?? collectionNames.en)
}
