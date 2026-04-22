<template>
  <div class="flex flex-col min-h-screen">
    <HomeHeader />
    <main class="flex-grow container">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
