<template>
  <header class="h-full desktop:min-h-screen flex flex-col min-h-[750px]">
    <div
      class="desktop:h-[120px] flex flex-col desktop:flex-row items-center justify-between w-full px-[20px] desktop:px-[80px] py-[30px] gap-[36px]"
      ref="navbar"
    >
      <img src="/assets/logo.svg" alt="logo" class="cursor-pointer h-[48px] desktop:h-[60px]">
      <div class="flex items-center desktop:gap-[60px] justify-between desktop:justify-end w-full">
        <img src="/assets/hamburger.svg" alt="Menu" class="desktop:hidden cursor-pointer z-8" @click="toggleMenu">
        <nav>
          <ul class="hidden desktop:flex gap-[24px]">
            <li v-for="(link, index) in navLinks" :key="index">
              <a :href="link.href" class="text-[#99A1A5] hover:underline uppercase"
                :class="{ 'text-[#416887]': link.active }">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center gap-[4px]">
          <img v-for="(icon, index) in socialLinks" :key="index" :src="icon.src" :alt="icon.alt"
            class="transition-transform duration-200 hover:scale-110 cursor-pointer">
        </div>
      </div>
    </div>
    <Transition name="slide">
      <div v-if="isMenuOpen" class="fixed inset-0 bg-white z-40 desktop:hidden flex flex-col" @click.self="closeMenu">
        <div class="flex justify-end p-[20px]">
          <button @click="closeMenu" class="text-[#416887] text-[40px] leading-none">×</button>
        </div>

        <nav class="flex-1 flex items-center justify-center">
          <ul class="flex flex-col gap-[32px] text-center">
            <li v-for="(link, index) in navLinks" :key="index">
              <a :href="link.href" class="text-[24px] uppercase hover:underline"
                :class="link.active ? 'text-[#416887]' : 'text-[#99A1A5]'" @click="closeMenu">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center justify-center gap-[16px] pb-[40px]">
          <img v-for="(icon, index) in socialLinks" :key="index" :src="icon.src" :alt="icon.alt"
            class="transition-transform duration-200 hover:scale-110 cursor-pointer w-[32px] h-[32px]">
        </div>
      </div>
    </Transition>
    <main class="relative flex-1 flex items-stretch px-[24px] overflow-hidden">
      <div
        ref="heroContent"
        class="flex flex-col items-center desktop:items-start justify-center gap-[24px] relative w-full desktop:w-fit mx-auto desktop:mx-0 desktop:px-[150px] z-10 desktop:z-10"
      >
        <div class="flex flex-col w-full desktop:w-auto text-left">
          <h1
            ref="heroTitle"
            class="text-[#416887] text-[40px] desktop:text-[65px] uppercase font-medium desktop:font-light leading-[110%] desktop:leading-[100%] tracking-[1.3px]"
          >
            Collagen is <br /> the Fountain <br /> of Youth
          </h1>
          <h4 ref="heroSubtitle" class="text-[#99A1A5] text-[20px] desktop:text-[30px] uppercase mt-[8px]">
            What's Your Influence?
          </h4>
        </div>

        <button
          ref="heroButton"
          class="relative h-[64px] bg-[#456276] flex items-center justify-center rounded-[10px] px-[30px] gap-[8px] text-white mt-[8px] w-full desktop:w-full text-[22px] font-medium overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(69,98,118,0.4)] hover:bg-gradient-to-r hover:from-[#456276] hover:to-[#5a7b91] z-2"
          @click="showForm">
          <img src="/assets/ben.svg" alt="">
          Connect with Ben
        </button>
      </div>

      <div
        ref="heroImage"
        class="absolute -right-[30%] desktop:right-0 top-0 bottom-0 w-[80%] desktop:w-auto h-full z-0 desktop:z-10"
      >
        <img src="/assets/ladyinhero.svg" alt="hero lady"
          class="h-full w-auto object-cover opacity-40 desktop:opacity-100" />
      </div>

      <div class="hidden desktop:block absolute left-0 bottom-0" style="z-index: 0;">
        <img src="/assets/feather.svg" alt="">
      </div>
    </main>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ScrollReveal from 'scrollreveal'

const isMenuOpen = ref(false)
const emit = defineEmits(['showForm'])

const navLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'Shop', href: '#', active: false },
  { label: 'About Us', href: '#', active: false },
  { label: 'Be an Influencer', href: '#', active: false }
]

const socialLinks = [
  { src: '/assets/facebook.svg', alt: 'Facebook' },
  { src: '/assets/linkedin.svg', alt: 'LinkedIn' },
  { src: '/assets/hash.svg', alt: 'Instagram/Hashtag' },
  { src: '/assets/twitter.svg', alt: 'Twitter' }
]

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
const closeMenu = () => (isMenuOpen.value = false)
const showForm = () => emit('showForm')

const navbar = ref(null)
const heroTitle = ref(null)
const heroSubtitle = ref(null)
const heroButton = ref(null)
const heroImage = ref(null)
const heroContent = ref(null)

onMounted(() => {
  const sr = ScrollReveal()

  sr.reveal(navbar.value, {
    duration: 800,
    distance: '30px',
    origin: 'top',
    easing: 'ease-out',
    reset: false
  })

  sr.reveal(heroTitle.value, {
    duration: 1000,
    distance: '50px',
    origin: 'left',
    opacity: 0,
    delay: 200
  })

  sr.reveal(heroSubtitle.value, {
    duration: 1000,
    distance: '40px',
    origin: 'bottom',
    delay: 400,
    opacity: 0
  })

  sr.reveal(heroButton.value, {
    duration: 1000,
    distance: '30px',
    origin: 'bottom',
    delay: 600,
    opacity: 0
  })

  sr.reveal(heroImage.value, {
    duration: 1200,
    distance: '60px',
    origin: 'right',
    delay: 300,
    opacity: 0
  })
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-from {
  transform: translateX(-100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>