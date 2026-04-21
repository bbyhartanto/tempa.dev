<script setup lang="ts">
const { locale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="locale-switch" :aria-label="t('labels.language')">
    <NuxtLink
      v-for="code in ['en', 'id']"
      :key="code"
      :to="switchLocalePath(code)"
      :class="{ 'is-active': locale === code }"
    >
      {{ code.toUpperCase() }}
    </NuxtLink>
  </div>
</template>
