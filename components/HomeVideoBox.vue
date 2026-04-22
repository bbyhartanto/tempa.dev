<template>
  <div
    id="video-box"
    class="flex items-center justify-center bg-black"
    :style="videoStyle"
  >
    <h2 class="text-3xl text-center text-white">VIDEO BOX</h2>
  </div>
</template>

<script setup lang="ts">
// HomeVideoBox.vue
import { ref, computed, onMounted, onUnmounted } from 'vue';

// ── Scroll thresholds ──────────────────────────────────────────────────────────
// Transition begins at SCROLL_START and is fully complete at SCROLL_END.
// Adjust these two values to control where the animation happens.
const SCROLL_START = 300;
const SCROLL_END   = 900;

// ── Reactive state ─────────────────────────────────────────────────────────────
const currentScrollY = ref(0);
// Frozen mouse position — captured while box still follows the cursor.
// Once transition begins, this locks so the lerp start point stays stable.
const frozenMouseX = ref(0);

// ── Math helpers ───────────────────────────────────────────────────────────────
const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);
const lerp  = (a: number, b: number, t: number) => a + (b - a) * t;

/** Cubic ease-in-out — slow start, fast middle, slow end */
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// ── Scroll-driven style ────────────────────────────────────────────────────────
const videoStyle = computed(() => {
  const rawT = clamp(
    (currentScrollY.value - SCROLL_START) / (SCROLL_END - SCROLL_START),
    0, 1
  );
  const t = easeInOutCubic(rawT); // eased progress 0 → 1

  // Size: 320×160 → 1080×720
  const width  = Math.round(lerp(320, 1080, t));
  const height = Math.round(lerp(160,  720, t));

  // Once fully expanded, let the element sit in-flow (position: relative in flex parent)
  if (rawT >= 1) {
    return {
      width:  width  + 'px',
      height: height + 'px',
    };
  }

  // Position: mouse anchor → viewport center (parent sticky div is always centered)
  const targetLeft = window.innerWidth  / 2 - width  / 2;
  const targetTop  = window.innerHeight / 2 - height / 2;

  const currentLeft = lerp(frozenMouseX.value, targetLeft, t);
  const currentTop  = lerp(100,                targetTop,  t);

  return {
    position: 'fixed',
    left:     currentLeft + 'px',
    top:      currentTop  + 'px',
    zIndex:   50,
    width:    width  + 'px',
    height:   height + 'px',
  } as Record<string, string | number>;
});

// ── Event handlers ─────────────────────────────────────────────────────────────
const moveCursor = (e: MouseEvent) => {
  // Only track mouse while box is still fully attached (before transition starts)
  if (currentScrollY.value < SCROLL_START) {
    frozenMouseX.value = e.clientX;
  }
};

const handleScroll = () => {
  currentScrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('mousemove', moveCursor);
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('mousemove', moveCursor);
  window.removeEventListener('scroll', handleScroll);
});
</script>
