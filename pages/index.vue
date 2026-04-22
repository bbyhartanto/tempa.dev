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
        <div class="hero-copywritting h-[560px] content-center ">
          <h1 class="text-center text-5xl herocopy w-[1000px]">
            We are the digital enabler studio for brands that refuse to look ordinary in digital era.
          </h1>
        </div>
      </div>
    </section>

    <!-- Sticky + overlay section: siblings at root level, no overflow parent -->
    <div class="relative">
      
      <!-- This div sticks to the top while the card below scrolls over it -->
      <div class="sticky top-0 h-screen z-10 flex items-center justify-center">
        <HomeVideoBox />
      </div>

      <!-- This card scrolls up over the sticky div because z-20 > z-10 -->
      <div class="relative z-20 shadow-2xl min-h-screen">
        <div class="grid grid-cols-3 pt-10 max-w-[1200px] mx-auto gap-1">
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
