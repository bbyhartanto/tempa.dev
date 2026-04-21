<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const collections = useContentCollections()

const { data: caseStudies } = await useAsyncData(
  () => `case-studies:${route.path}`,
  () => queryCollection(collections.value.caseStudies).where('draft', '=', false).order('publishedAt', 'DESC').all(),
  { watch: [locale] }
)

useSeoMeta({
  title: 'Case studies',
  description: 'Tempa case studies sourced from Nuxt Content markdown files.'
})
</script>

<template>
  <section class="section">
    <div class="section-head">
      <div>
        <p class="section-kicker">{{ t('sections.studies') }}</p>
        <h1 class="section-title">Case studies that explain the business move, not just the pixels.</h1>
      </div>
    </div>

    <div v-if="caseStudies?.length" class="card-grid">
      <NuxtLink v-for="study in caseStudies" :key="study.path" :to="localePath(study.path)">
        <ContentCard :item="study" :cta="t('labels.readMore')" />
      </NuxtLink>
    </div>

    <div v-else class="empty-state">
      No case studies published yet.
    </div>
  </section>
</template>
