<script setup lang="ts">
const localeHead = useLocaleHead({
  addSeoAttributes: true
})

useHead(() => ({
  htmlAttrs: localeHead.value.htmlAttrs,
  link: localeHead.value.link,
  meta: localeHead.value.meta
}))
</script>

<template>
  <glassi-fy mode="super" scale="60" blur="10" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
