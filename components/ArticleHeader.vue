<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <header class="article-header">
    <div class="container article-header__inner">
      <div class="article-header__top">
        <NuxtLink :to="localePath('/')" class="article-header__brand">
          <span class="article-header__kicker">Tempa Journal</span>
          <span class="article-header__mark">Tempa</span>
        </NuxtLink>

        <div class="article-header__actions">
          <LocaleSwitch />
          <NuxtLink :to="localePath('/blog')" class="button secondary">{{ t('nav.blog') }}</NuxtLink>
        </div>
      </div>

      <nav class="article-nav" aria-label="Article navigation">
        <NuxtLink :to="localePath('/services')">{{ t('nav.services') }}</NuxtLink>
        <NuxtLink :to="localePath('/case-studies')">{{ t('nav.caseStudies') }}</NuxtLink>
        <NuxtLink :to="localePath('/blog')">{{ t('nav.blog') }}</NuxtLink>
        <NuxtLink :to="localePath('/#contact')">{{ t('nav.contact') }}</NuxtLink>
      </nav>
    </div>
  </header>
</template>
