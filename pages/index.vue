<script setup lang="ts">
definePageMeta({
  layout: 'home'
})

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const collections = useContentCollections()
const { scope } = useRevealMotion()

const { data } = await useAsyncData(
  () => `home:${route.path}`,
  async () => {
    const current = collections.value

    const [services, caseStudies, blog] = await Promise.all([
      queryCollection(current.services)
        .where('draft', '=', false)
        .order('order', 'ASC')
        .limit(3)
        .all(),
      queryCollection(current.caseStudies)
        .where('draft', '=', false)
        .order('featured', 'DESC')
        .order('publishedAt', 'DESC')
        .limit(2)
        .all(),
      queryCollection(current.blog)
        .where('draft', '=', false)
        .order('publishedAt', 'DESC')
        .limit(3)
        .all()
    ])

    return { services, caseStudies, blog }
  },
  {
    watch: [locale]
  }
)

useSeoMeta({
  title: 'Motion-rich digital agency',
  description: 'Tempa designs and builds premium landing pages, audits, booking systems, and internal products with a strong content workflow.'
})
</script>

<template>
    <main>
      <section class="word-hero text-center mt-12">
        <div class="flex items-center justify-center p-12">
          <div class="hero-copywritting here">
              <h1 class="text-center text-5xl">{{ t('hero.title') }}</h1>
            </div>
        </div>
      </section>
     </main>
</template>
