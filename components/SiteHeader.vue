<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <header class="site-header">
    <div class="container">
      <NuxtLink :to="localePath('/')" class="brand">
        <span class="brand-mark">Tempa</span>
        <span class="brand-note">Motion-first agency systems</span>
      </NuxtLink>

      <nav class="site-nav" aria-label="Primary navigation">
        <NuxtLink :to="localePath('/')">{{ t('nav.home') }}</NuxtLink>
        <NuxtLink :to="localePath('/services')">{{ t('nav.services') }}</NuxtLink>
        <NuxtLink :to="localePath('/case-studies')">{{ t('nav.caseStudies') }}</NuxtLink>
        <NuxtLink :to="localePath('/blog')">{{ t('nav.blog') }}</NuxtLink>
        <NuxtLink :to="localePath('/#contact')">{{ t('nav.contact') }}</NuxtLink>
      </nav>

      <LocaleSwitch />
    </div>
  </header>
</template>
