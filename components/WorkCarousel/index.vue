<script setup lang="ts">
const images = import.meta.glob('./images/*.png', { eager: true, import: 'default' })
const imageList = Object.values(images)
</script>

<template>
  <div class="w-full max-w-[1200px] py-12 mb-16 border-y border-black/10 relative">
    <div class="flex flex-col lg:flex-row gap-4 text-left">
      <!-- Works show off -->
      <div class="w-full lg:w-48 shrink-0 bg-white lg:absolute p-4 z-10">
        <h3 class="text-[#161513] mb-4 text-[14px] font-medium">Recent Works</h3>
        <p class="text-[#6f675d] text-sm leading-snug">We’ve specialized in taking early-stage ideas and refining them through a rigorous process of brand strategy and UI/UX design. </p>
      </div>
      
      <!-- Images Grid -->
      <div class="flex-grow w-full overflow-hidden">
        <div class="flex overflow-x-auto gap-4 pb-4 px-8 snap-x  lg:pl-[200px] scroll-pl-[200px] ">
          <div v-for="(img, index) in imageList" :key="index" class="w-[147px] lg:w-[193px] rounded-[12px] shrink-0 aspect-[21/41] bg-[#d9d9d9] snap-start overflow-hidden">
            <img :src="img as string" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
