<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <header class="home-header">
    <div class="container home-header__inner">
      <NuxtLink :to="localePath('/')" class="home-brand">
      <a href="/" class="home-brand__mark flex items-center">
        <img src="/assets/svg/tempa-logo.svg" alt="Tempa Logo" class="h-8 w-auto" />
      </a>
      </NuxtLink>

      <div class="home-header__right">
        

        <div class="home-header__meta">
          <div class="flex flex-col">
              <span>Indonesia</span>
              <span>Bandung</span>
            </div>
            <LocaleSwitch />
          <NuxtLink :to="localePath('/#contact')" class="button primary">Let&apos;s talk</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
