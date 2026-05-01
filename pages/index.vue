<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<template>
  <div class="fixed top-0 z-50 w-full">
      <HomeHeader/>
    </div>
  <div class="min-h-screen bg-[#fdfbf6] text-[#161513] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col">
    
    <div class="flex flex-col items-center justify-center flex-grow p-6 text-center mt-20">
      <!-- Heading -->
     <!-- Logo Section -->
    <div class="mb-10 scale-110">
      <img src="~/assets/svg/tempa-logo.svg" alt="Tempa Logo" class="h-16 mx-auto" />
    </div>

    <!-- Services Description -->
    <div class="max-w-2xl mb-10">
      <p class="text-2xl font-medium leading-tight mb-1">Design, code & interaction services studio.</p>
      <p class="text-2xl font-medium leading-tight">Helping brands to stand out the digital era.</p>
    </div>

    

    <!-- Email Link -->
    <div class="flex items-center justify-between gap-8 bg-black p-4
     rounded-[12px] text-white hover:scale-[1.02] transition-all duration-200 cursor-pointer z-[100]
     fixed bottom-8 left-4 right-4 w-auto
     lg:relative lg:bottom-auto lg:left-auto lg:right-auto lg:w-max lg:mx-auto lg:mt-14 lg:mb-14">
      <p class=" font-light leading-tight">Let's work together</p>
      <a href="mailto:hello@tempa.dev" class="text-lg font-bold hover:opacity-70 transition-opacity">hello@tempa.dev</a>
    </div>  
    
<section class="w-full justify-center flex">
  <!-- Cards Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 w-full max-w-[960px] bg-white rounded-[24px] overflow-hidden border border-black/5 shadow-sm">
      <!-- Card Left -->
      <div class=" p-8 text-left flex flex-col justify-between min-h-[200px] border-b md:border-b-0 md:border-r border-black/5">
        <div>
          <h2 class="text-2xl font-bold mb-3">Design</h2>
          <p class="text-[#6f675d] text-sm leading-snug">Design Services</p>
        </div>
        <div class="mt-8">
          <p class="text-[#b1ada7] text-[13px] uppercase tracking-[0.05em] font-medium">Branding</p>
          <p class="text-[#b1ada7] text-[13px] uppercase tracking-[0.05em] font-medium">Customer Journey Analysis</p>
          <p class="text-[#b1ada7] text-[13px] uppercase tracking-[0.05em] font-medium">UI&UX Design Systems</p>
          <p class="text-[#b1ada7] text-[13px] uppercase tracking-[0.05em] font-medium">Content creation</p>
        </div>
      </div>

      <!-- Card Right -->
      <div class="p-8 text-left flex flex-col justify-between min-h-[200px]">
        <div>
          <h2 class="text-2xl font-bold mb-3">Build</h2>
          <p class="text-[#6f675d] text-sm leading-snug">Product development Services</p>
        </div>
        <div class="mt-8">
        </div>
        <p class="text-[#b1ada7] text-[13px] uppercase tracking-[0.05em] font-medium">Website</p>
        <p class="text-[#b1ada7] text-[13px] uppercase tracking-[0.05em] font-medium">Custom POS</p>
        <p class="text-[#b1ada7] text-[13px] uppercase tracking-[0.05em] font-medium">Web App</p>
        <p class="text-[#b1ada7] text-[13px] uppercase tracking-[0.05em] font-medium">Mobile App</p>
      </div>
    </div>
</section>
    
    <!-- Quotes Section -->
<section class="w-full justify-center flex p-8">

  <div class="flex flex-col lg:flex-row w-full max-w-[960px] gap-8">
        <div class="text-left w-full">
          <p class="font-medium text-lg mb-4">Case Study</p>
          <h2 class="max-w-4xl font-bold mb-4">Customer journey must be frictionless, trust were build by having good customer experience.</h2>
          <p>
            Take a look at our recent experiment with local business owner to help them improve customer experience.
          </p>
        </div>
        <div class="text-left w-full">
          <div class="flex gap-4 bg-white w-full rounded-[12px] p-4 justify-between items-center cursor-pointer hover:scale-[1.02] transition-all duration-200 cursor-pointer shadow-sm">
            <p>Coming soon</p>
            <h2 class="font-medium text-2xl">crema</h2>
          </div>
        </div>
    </div>
    <!-- Works show off -->
</section>
    <WorkCarousel />
    
    <!-- Footer -->
    <footer class="text-[#b1ada7] text-[13px] font-medium">
      <p>© 2026 Tempa Studio. All rights reserved.</p>
    </footer>
    </div>
  </div>
</template>

<style scoped>
/* Ensure the font is applied */
div {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
