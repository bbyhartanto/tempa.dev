<script setup lang="ts">
</script>

<template>
  <header class="home-header max-w-[1200px] mx-auto">
    <div class="container home-header__inner ">
      <NuxtLink to="/" class="home-brand home-brand__mark flex items-center">
        <img src="~/assets/svg/tempa-logo.svg" alt="Tempa Logo" class="h-8 w-auto" />
      </NuxtLink>

      <div class="home-header__right">
        

        <div class="home-header__meta">
          <div class="flex gap-4">
              <span>Indonesia</span>
              <span>Bandung</span>
            </div>
          <!-- <NuxtLink to="/#contact" class="button primary">Let&apos;s talk</NuxtLink> -->
        </div>
      </div>
    </div>
  </header>
</template>
