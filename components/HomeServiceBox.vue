<template>
  <div class="w-[399px] h-[399px] flex flex-col items-center justify-center text-white glass-box p-8 text-center glassify">
    <div v-if="service">
      <h3 class="text-2xl font-bold mb-4">{{ service.title }}</h3>
      <p class="text-sm opacity-80">{{ service.description }}</p>
    </div>
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  service?: any
}>()
</script>
