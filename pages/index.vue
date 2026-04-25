<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<template>
  <div class="min-h-screen bg-[#f5f4ed] text-[#161513] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col items-center justify-center p-6 text-center">
    
    <!-- Heading -->
    <h1 class="text-5xl font-bold mb-20 tracking-tight">Halloooooo.....</h1>

    <!-- Cards Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 w-full max-w-[960px] bg-white rounded-[32px] overflow-hidden border border-black/5 shadow-sm mb-16">
      <!-- Card Left -->
      <div class="p-14 text-left flex flex-col justify-between min-h-[260px] border-b md:border-b-0 md:border-r border-black/5">
        <div>
          <h2 class="text-2xl font-bold mb-3">studio.tempa.dev</h2>
          <p class="text-[#6f675d] text-lg leading-snug">Tempat menempa digital presence brandmu</p>
        </div>
        <div class="mt-8">
          <p class="text-[#b1ada7] text-[13px] uppercase tracking-[0.05em] font-medium">website, mobile app, UI&UX DesignServices</p>
        </div>
      </div>

      <!-- Card Right -->
      <div class="p-14 text-left flex flex-col justify-between min-h-[260px]">
        <div>
          <h2 class="text-2xl font-bold mb-3">Tempa products development</h2>
        </div>
        <div class="mt-8">
          <p class="text-[#b1ada7] text-[13px] uppercase tracking-[0.05em] font-medium">Product development research</p>
        </div>
      </div>
    </div>

    <!-- Logo Section -->
    <div class="mb-10 scale-110">
      <img src="~/assets/svg/tempa-logo.svg" alt="Tempa Logo" class="h-16 mx-auto" />
    </div>

    <!-- Services Description -->
    <div class="max-w-2xl mb-10">
      <p class="text-2xl font-medium leading-tight mb-1">Design, code & interaction services</p>
      <p class="text-2xl font-medium leading-tight">Helping brands to stand out the digital era.</p>
    </div>

    <!-- Email Link -->
    <div class="mb-14">
      <a href="mailto:hello@tempa.dev" class="text-lg font-medium hover:opacity-70 transition-opacity">hello@tempa.dev</a>
    </div>

    <!-- Footer -->
    <footer class="text-[#b1ada7] text-[13px] font-medium">
      <p>© 2026 Tempa Studio. All rights reserved.</p>
    </footer>

  </div>
</template>

<style scoped>
/* Ensure the font is applied */
div {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
