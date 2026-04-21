<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const collections = useContentCollections()
const contentPath = computed(() => `/services/${route.params.slug}`)

const { data: page } = await useAsyncData(
  () => `service:${route.path}`,
  () => queryCollection(collections.value.services).path(contentPath.value).first(),
  { watch: [locale] }
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Service not found'
  })
}

useSeoMeta({
  title: page.value.seoTitle || page.value.title,
  description: page.value.seoDescription || page.value.description
})
</script>

<template>
  <section class="section">
    <article class="article-shell">
      <div class="meta">
        <span class="badge">{{ page?.badge }}</span>
        <span>{{ page?.category }}</span>
      </div>
      <h1>{{ page?.title }}</h1>
      <p class="section-copy">{{ page?.description }}</p>

      <div class="article-body">
        <ContentRenderer v-if="page" :value="page" />
      </div>

      <div class="button-row" style="margin-top: 28px;">
        <NuxtLink :to="localePath('/services')" class="button secondary">{{ t('labels.backToList') }}</NuxtLink>
      </div>
    </article>
  </section>
</template>
