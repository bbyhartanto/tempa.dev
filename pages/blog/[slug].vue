<script setup lang="ts">
definePageMeta({
  layout: 'article'
})

const { t, locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const collections = useContentCollections()
const contentPath = computed(() => `/blog/${route.params.slug}`)

const { data: page } = await useAsyncData(
  () => `blog-post:${route.path}`,
  () => queryCollection(collections.value.blog).path(contentPath.value).first(),
  { watch: [locale] }
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found'
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
        <span>{{ page?.publishedAt }}</span>
        <span>{{ page?.readingTime }}</span>
      </div>
      <h1>{{ page?.title }}</h1>
      <p class="section-copy">{{ page?.description }}</p>

      <div class="article-body">
        <ContentRenderer v-if="page" :value="page" />
      </div>

      <div class="button-row" style="margin-top: 28px;">
        <NuxtLink :to="localePath('/blog')" class="button secondary">{{ t('labels.backToList') }}</NuxtLink>
      </div>
    </article>
  </section>
</template>
