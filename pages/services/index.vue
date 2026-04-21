<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const collections = useContentCollections()

const { data: services } = await useAsyncData(
  () => `services:${route.path}`,
  () => queryCollection(collections.value.services).where('draft', '=', false).order('order', 'ASC').all(),
  { watch: [locale] }
)

useSeoMeta({
  title: 'Services',
  description: 'Tempa services published from markdown content collections.'
})
</script>

<template>
  <section class="section">
    <div class="section-head">
      <div>
        <p class="section-kicker">{{ t('sections.services') }}</p>
        <h1 class="section-title">Services written as content, not buried in components.</h1>
      </div>
    </div>

    <div v-if="services?.length" class="card-grid">
      <NuxtLink v-for="service in services" :key="service.path" :to="localePath(service.path)">
        <ContentCard :item="service" :cta="t('labels.readMore')" />
      </NuxtLink>
    </div>

    <div v-else class="empty-state">
      No services published yet.
    </div>
  </section>
</template>
