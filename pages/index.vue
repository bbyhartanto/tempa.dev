<script setup lang="ts">
import HomeServiceBox from '../components/HomeServiceBox.vue'
import HomeVideoBox from '../components/HomeVideoBox.vue'

definePageMeta({ layout: false })
</script>

<template>
  <!-- Layout-free wrapper so sticky has full window scroll context, no container constraints -->
  <div>
    <HomeHeader />

    <!-- Hero text section -->
    <section class="word-hero text-center mt-12">
      <div class="flex items-center justify-center p-12">
        <div class="hero-copywritting herocopy h-[860px] content-center">
          <h1 class="text-center text-5xl">
            We are the digital enabler studio for brands that refuse to look ordinary in digital era.
          </h1>
        </div>
      </div>
    </section>

    <!-- Sticky + overlay section: siblings at root level, no overflow parent -->
    <div class="relative">
      <!-- This div sticks to the top while the card below scrolls over it -->
      <div class="mt-10 sticky top-0 h-screen bg-blue-500 z-10 flex items-center justify-center">
        <HomeVideoBox />
      </div>

      <!-- This card scrolls up over the sticky div because z-20 > z-10 -->
      <div class="relative bg-gray-900 z-20 shadow-2xl min-h-screen">
        <div class="grid justify-center gap-0 grid-cols-[repeat(auto-fit,300px)] pt-10">
          <HomeServiceBox>1</HomeServiceBox>
          <HomeServiceBox>2</HomeServiceBox>
          <HomeServiceBox>3</HomeServiceBox>
          <HomeServiceBox>4</HomeServiceBox>
          <HomeServiceBox>5</HomeServiceBox>
          <HomeServiceBox>6</HomeServiceBox>
        </div>
      </div>
    </div>

    <SiteFooter />
  </div>
</template>
