import gsap from 'gsap'

export function useRevealMotion(selector = '[data-reveal]') {
  const scope = ref<HTMLElement | null>(null)
  const mm = gsap.matchMedia()

  onMounted(() => {
    mm.add(
      {
        desktop: '(min-width: 769px)',
        mobile: '(max-width: 768px)'
      },
      (context) => {
        const root = scope.value

        if (!root) {
          return
        }

        const targets = root.querySelectorAll<HTMLElement>(selector)

        gsap.set(targets, {
          opacity: 0,
          y: context.conditions?.mobile ? 18 : 42
        })

        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: context.conditions?.mobile ? 0.5 : 0.85,
          stagger: context.conditions?.mobile ? 0.06 : 0.11,
          ease: 'power3.out'
        })
      }
    )
  })

  onBeforeUnmount(() => {
    mm.revert()
  })

  return { scope }
}
