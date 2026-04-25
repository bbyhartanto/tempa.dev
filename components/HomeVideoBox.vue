<template>
  <div
    id="video-box"
    class="flex items-center justify-center bg-black"
    :style="videoStyle"
  >
    <img
      src="~/assets/img/porto-sample.png"
      alt="Portfolio sample"
      class="w-full h-full object-cover"
    />
  </div>
</template>

<script setup lang="ts">
// HomeVideoBox.vue
import { ref, computed, onMounted, onUnmounted } from 'vue';

// ── Scroll thresholds ──────────────────────────────────────────────────────────
// Position and size have INDEPENDENT scroll ranges so they can overlap.
//
// ↕ position: mouse anchor → viewport center
const POSITION_START = 10;  // scroll px where movement begins
const POSITION_END   = 1000;  // scroll px where movement completes
//
// ↔ size: small → fully expanded
const SIZE_START     = 0;   // scroll px where resize begins (starts immediately)
const SIZE_END       = 1000;  // scroll px where resize completes

// ── Mouse smoothing ────────────────────────────────────────────────────────────
// How fast the box chases the cursor each RAF frame.
// 0.04 = very slow/heavy trail   |   0.2 = quick, light trail   |   1.0 = instant snap
const MOUSE_SMOOTHING = 0.08;

// ── Reactive state ─────────────────────────────────────────────────────────────
const currentScrollY = ref(0);
const targetMouseX   = ref(0); // raw cursor X — updated instantly on mousemove
const displayMouseX  = ref(0); // smoothed trailing X — lerped in RAF loop
const frozenMouseX   = ref(0); // snapshot of displayMouseX when scroll transition begins

let rafId: number | null = null;

// ── Math helpers ───────────────────────────────────────────────────────────────
const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);
const lerp  = (a: number, b: number, t: number) => a + (b - a) * t;

/** Cubic ease-in-out — slow start, fast middle, slow end */
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// ── RAF mouse trail loop ───────────────────────────────────────────────────────
function tickMouseFollow() {
  // Lerp display position toward raw target each frame
  displayMouseX.value = lerp(displayMouseX.value, targetMouseX.value, MOUSE_SMOOTHING);

  // Keep frozenMouseX in sync until the POSITION transition begins; then it locks
  if (currentScrollY.value < POSITION_START) {
    frozenMouseX.value = displayMouseX.value;
  }

  rafId = requestAnimationFrame(tickMouseFollow);
}

// ── Scroll-driven style ────────────────────────────────────────────────────────
const videoStyle = computed(() => {
  const scroll = currentScrollY.value;

  // Independent progress values — each eased separately
  const posRawT  = clamp((scroll - POSITION_START) / (POSITION_END - POSITION_START), 0, 1);
  const sizeRawT = clamp((scroll - SIZE_START)     / (SIZE_END     - SIZE_START),     0, 1);

  const posT  = easeInOutCubic(posRawT);  // 0→1: mouse anchor → center
  const sizeT = easeInOutCubic(sizeRawT); // 0→1: small → expanded

  // Size driven by sizeT
  const width  = Math.round(lerp(480, 1280, sizeT));
  const height = Math.round(lerp(240,  720, sizeT));

  // Server-side fallback or wait for client
  if (!import.meta.client) {
    return {
      width:  width  + 'px',
      height: height + 'px',
    };
  }

  // Once BOTH transitions complete, sit in-flow in parent
  if (posRawT >= 1 && sizeRawT >= 1) {
    return {
      width:  width  + 'px',
      height: height + 'px',
    };
  }

  // Position driven by posT (mouse anchor → viewport center)
  const targetLeft = window.innerWidth  / 2 - width / 2;
  const targetTop  = window.innerHeight / 2 - height / 2;

  const currentLeft = lerp(frozenMouseX.value, targetLeft, posT);
  const currentTop  = lerp(100,               targetTop,  posT);

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
  // Always update raw target; the RAF loop smoothly chases it
  targetMouseX.value = e.clientX;
};

const handleScroll = () => {
  currentScrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('mousemove', moveCursor);
  window.addEventListener('scroll', handleScroll, { passive: true });
  rafId = requestAnimationFrame(tickMouseFollow);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', moveCursor);
  window.removeEventListener('scroll', handleScroll);
  if (rafId !== null) cancelAnimationFrame(rafId);
});
</script>
