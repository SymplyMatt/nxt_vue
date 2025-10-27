<template>
    <section class="w-full flex flex-col desktop:flex-row mx-auto py-[100px] desktop:py-[60px] items-center justify-center gap-[50px] desktop:gap-[24px] desktop:px-[100px] bg-[#F0F1F2] px-[20px]">
      <h4 class="text-[#416887] text-[30px] desktop:text-[45px] max-w-[580px] text-center desktop:text-left" style="letter-spacing: 0.45px; line-height: 100%;">WOULD YOU LIKE TO LEARN MORE?</h4>
      <button class="relative h-[60px] desktop:h-[64px] bg-[#456276] flex items-center justify-center rounded-[10px] px-[30px] gap-[8px] text-white min-w-[360px] text-[20px] desktop:text-[22px] font-medium overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(69,98,118,0.4)] hover:bg-gradient-to-r hover:from-[#456276] hover:to-[#5a7b91]" style="width: fit-content;" @click="showForm">
        <img src="/assets/ben.svg" alt="">
        Connect with Ben
      </button>
    </section>
    <footer class="desktop:h-[140px] bg-[#456276] flex flex-col desktop:flex-row items-center justify-between desktop:px-[100px] px-[20px] py-[50px] desktop:py-0 gap-[20px]">
      <p class="text-[14px] text-white gap-[20px] flex items-center">Copyright © 2022 <span class="font-bold flex items-center gap-[20px] text-[20px]">|</span> <span class="font-bold flex items-center gap-[20px]">LOGO</span></p>
      <nav class="w-full desktop:w-fit">
        <ul class="flex gap-[24px] text-[10px] desktop:text-[14px] w-full desktop:w-fit justify-between desktop:justify-end">
          <li><a href="#" class="text-white hover:underline">Privacy Policy</a></li>
          <li><a href="#" class="text-white hover:underline">Terms & Condition</a></li>
          <li><a href="#" class="text-white hover:underline">Contact Us</a></li>
          <li><a href="#" class="text-white hover:underline">FAQs</a></li>
        </ul>
      </nav>
    </footer>
</template>

<script setup>
const emit = defineEmits(['showForm']);
const showForm = () => {
  emit('showForm');
};
</script>