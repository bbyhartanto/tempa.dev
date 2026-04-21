<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const collections = useContentCollections()

const { data: posts } = await useAsyncData(
  () => `blog:${route.path}`,
  () => queryCollection(collections.value.blog).where('draft', '=', false).order('publishedAt', 'DESC').all(),
  { watch: [locale] }
)

useSeoMeta({
  title: 'Insights',
  description: 'Articles and notes managed in markdown with Nuxt Content.'
})
</script>

<template>
  <section class="section">
    <div class="section-head">
      <div>
        <p class="section-kicker">{{ t('sections.blog') }}</p>
        <h1 class="section-title">Thoughtful writing, shipped through Git.</h1>
      </div>
    </div>

    <div v-if="posts?.length" class="card-grid">
      <NuxtLink v-for="post in posts" :key="post.path" :to="localePath(post.path)">
        <ContentCard :item="post" :cta="t('labels.readMore')" />
      </NuxtLink>
    </div>

    <div v-else class="empty-state">
      No blog posts published yet.
    </div>
  </section>
</template>
