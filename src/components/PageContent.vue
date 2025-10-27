<template>
  <section
    class="w-full flex flex-col mx-auto py-[60px] desktop:py-[120px] items-center justify-center text-center gap-[24px] max-w-[760px] px-[20px] desktop:px-[80px]">
    <h4 class="text-[#416887] uppercase text-[30px] desktop:text-[40px] desktop:tracking-[0.8px] tracking-[0.6px]">
      Congratulations
    </h4>
    <h2 class="text-[23px] text-[#788995]" style="letter-spacing: 0.44px;">
      You are among the very first to learn of NXM,<br />
      a superior luxury & lifestyle brand developed by some of the greatest minds in the industry.
    </h2>
    <h2 class="text-[23px] text-[#788995]" style="letter-spacing: 0.44px;">
      Launching with a perfect trio of proprietary, results-driven beauty products, NXM is primed to cause major
      disruption in the direct-selling industry with its hybrid, influencer marketing platform and rewards system.
    </h2>
  </section>

  <section
    class="bg-[#E1DFDD3B] w-full flex flex-col mx-auto py-[120px] items-center justify-center desktop:px-[10%] gap-[80px] px-[20px]">

    <div
      class="flex flex-col desktop:flex-row w-full items-center justify-between max-w-[1140px] gap-[60px] product-section">
      <div class="flex flex-col gap-[20px] max-w-[640px] order-2 desktop:order-1">
        <div class="text-[#416887] dekstop:text-[40px] text-[30px]" style="line-height: 100%; letter-spacing: 0.8px;">
          COLLAGEN PEPTIDE EXFOLIATING GEL
        </div>
        <div class="flex items-stretch gap-[16px]" style="line-height: 36px;">
          <svg width="5" viewBox="0 0 5 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"
            preserveAspectRatio="none">
            <rect width="5" height="100" fill="#788995" fill-opacity="0.75" />
          </svg>
          <div class="flex flex-col justify-between">
            <h4 class="text-[#99A1A5] text-[23px] m-0">Instant results with visible remove of dead cells.</h4>
            <h4 class="text-[#99A1A5] text-[23px] m-0">Clinically proven to activate the skin repair process.</h4>
            <h4 class="text-[#99A1A5] text-[23px] m-0">Smooths wrinkles, improves tone & elasticity.</h4>
          </div>
        </div>
      </div>
      <div class="order-1 desktop:order-2 product-image">
        <img src="/assets/productone.svg" alt="">
      </div>
    </div>

    <div
      class="flex flex-col desktop:flex-row w-full items-center justify-between max-w-[1140px] gap-[60px] product-section">
      <div class="product-image">
        <img src="/assets/producttwo.svg" alt="">
      </div>
      <div class="flex flex-col gap-[20px] max-w-[540px]">
        <div class="text-[#416887] text-[40px] flex flex-col gap-[8px] desktop:gap-[0px]"
          style="line-height: 100%; letter-spacing: 0.8px;">
          BELLA COLLAGEN ELIXIR
          <span class="text-[23px] text-[#788995]">Beauty from the Inside Out</span>
        </div>
        <div class="flex items-stretch gap-[16px]" style="line-height: 36px;">
          <svg width="5" viewBox="0 0 5 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"
            preserveAspectRatio="none">
            <rect width="5" height="100" fill="#788995" fill-opacity="0.75" />
          </svg>
          <div class="flex flex-col justify-between">
            <h4 class="text-[#99A1A5] text-[23px] m-0 p-0">Helps the body product more collagen.</h4>
            <h4 class="text-[#99A1A5] text-[23px] m-0 p-0">Backed by double blind clinical studies.</h4>
            <h4 class="text-[#99A1A5] text-[23px] m-0 p-0">Healthier skin, hair, nails, joints & more.</h4>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col desktop:flex-row w-full items-center justify-between max-w-[1140px] gap-[60px] product-section">
      <div class="flex flex-col gap-[20px] max-w-[540px] order-2 desktop:order-1">
        <div class="text-[#416887] text-[40px]" style="line-height: 100%; letter-spacing: 0.8px;">
          HYDRATING LIP PLUMPING OIL
        </div>
        <div class="flex items-stretch gap-[16px]" style="line-height: 36px;">
          <svg width="5" viewBox="0 0 5 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"
            preserveAspectRatio="none">
            <rect width="5" height="100" fill="#788995" fill-opacity="0.75" />
          </svg>
          <div class="flex flex-col justify-between">
            <h4 class="text-[#99A1A5] text-[23px] m-0 p-0">Ultimate softness, hydration, & comfort.</h4>
            <h4 class="text-[#99A1A5] text-[23px] m-0 p-0">A smooth and naturally-plump look.</h4>
            <h4 class="text-[#99A1A5] text-[23px] m-0 p-0">Shine of a gloss with the benefits of a balm.</h4>
          </div>
        </div>
      </div>
      <div class="order-1 desktop:order-2 product-image">
        <img src="/assets/productthree.svg" alt="">
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import ScrollReveal from "scrollreveal";

onMounted(() => {
  const sr = ScrollReveal({
    distance: "60px",
    duration: 1500,
    easing: "ease-out",
    reset: false,
  });

  sr.reveal(".product-section", {
    origin: "bottom",
    interval: 150,
  });

  sr.reveal(".product-image", {
    origin: "right",
    delay: 300,
    distance: "80px",
  });
});
</script>
