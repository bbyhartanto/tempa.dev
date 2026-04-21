<script setup lang="ts">
defineProps<{
  item: {
    path: string
    title: string
    description: string
    badge?: string
    publishedAt?: string
    readingTime?: string
  }
  cta?: string
}>()
</script>

<template>
  <article class="content-card">
    <div class="meta">
      <span v-if="item.badge" class="badge">{{ item.badge }}</span>
      <span v-if="item.publishedAt">{{ item.publishedAt }}</span>
      <span v-if="item.readingTime">{{ item.readingTime }}</span>
    </div>

    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>

    <div class="actions">
      <span class="link-arrow">{{ cta }}</span>
    </div>
  </article>
</template>
