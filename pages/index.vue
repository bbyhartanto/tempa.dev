<script setup lang="ts">
definePageMeta({
  layout: 'home'
})

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const collections = useContentCollections()
const { scope } = useRevealMotion()

const { data } = await useAsyncData(
  () => `home:${route.path}`,
  async () => {
    const current = collections.value

    const [services, caseStudies, blog] = await Promise.all([
      queryCollection(current.services)
        .where('draft', '=', false)
        .order('order', 'ASC')
        .limit(3)
        .all(),
      queryCollection(current.caseStudies)
        .where('draft', '=', false)
        .order('featured', 'DESC')
        .order('publishedAt', 'DESC')
        .limit(2)
        .all(),
      queryCollection(current.blog)
        .where('draft', '=', false)
        .order('publishedAt', 'DESC')
        .limit(3)
        .all()
    ])

    return { services, caseStudies, blog }
  },
  {
    watch: [locale]
  }
)

useSeoMeta({
  title: 'Motion-rich digital agency',
  description: 'Tempa designs and builds premium landing pages, audits, booking systems, and internal products with a strong content workflow.'
})
</script>

<template>
  <div class="mx-auto max-w-[1440px] px-4 sm:px-8 bg-white" ref="motionScope">
    <main class="mt-12 ">
      
      <section class="word-hero text-center">
        <div class="flex items-center justify-center p-12" data-reveal style="background-color: red;">
          <div class="bg-green-100 flex-grow">
              <h1 class="text-center text-5xl">{{ t('hero.title') }}</h1>

              <!-- <div class="button-row">
                <NuxtLink :to="localePath('/#contact')" class="button primary">{{ t('hero.primaryCta') }}</NuxtLink>
                <NuxtLink :to="localePath('/services')" class="button secondary">{{ t('hero.secondaryCta') }}</NuxtLink>
              </div> -->
            </div>
        </div>
  
      </section>
      <!-- <section class="section" data-reveal>
        <div class="section-head">
          <div>
            <p class="section-kicker">{{ t('sections.blog') }}</p>
            <h2 class="section-title">Publish like an agency that documents its edge.</h2>
          </div>
          <NuxtLink :to="localePath('/blog')" class="button secondary">{{ t('labels.viewAll') }}</NuxtLink>
        </div>

        <div v-if="data?.blog?.length" class="card-grid">
          <NuxtLink v-for="post in data.blog" :key="post.path" :to="localePath(post.path)">
            <ContentCard :item="post" :cta="t('labels.readMore')" />
          </NuxtLink>
        </div>
      </section>

      <section id="contact" class="section" data-reveal>
        <div class="contact-panel">
          <p class="section-kicker">{{ t('sections.contact') }}</p>
          <h2 class="section-title">{{ t('contact.title') }}</h2>
          <p class="section-copy">{{ t('contact.body') }}</p>
        </div>
      </section> -->
     </main>
  </div>
 

</template>
