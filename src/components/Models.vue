<template>
  <section class="w-full flex flex-col mx-auto py-[60px] items-center justify-center text-center gap-[24px] px-[20px] desktop:px-[100px]">
    <h4 class="text-[#416887] uppercase text-[30px] desktop:text-[40px] tracking-[0.8px]">
      What's Your Influence?
    </h4>

    <div class="desktop:flex desktop:flex-col">
      <h2 class="inline desktop:block text-[23px] text-[#788995] tracking-[0.44px]">
        Is this you? Could this be you?
      </h2>
      <h2 class="inline desktop:block text-[23px] text-[#788995] tracking-[0.44px]">
        Are you ready to be an influencer?
      </h2>
    </div>

    <div class="w-full grid grid-cols-1 desktop:grid-cols-3 gap-[30px] my-[30px]">
      <div
        v-for="(model, index) in models"
        :key="index"
        class="group reveal col-span-1 flex flex-col items-center justify-between h-[580px] desktop:h-[675px] rounded-[20px] overflow-hidden bg-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(65,104,135,0.25)] hover:-translate-y-[8px]"
      >
        <div class="relative overflow-hidden w-full">
          <img
            :src="model.image"
            :alt="model.name"
            class="h-[412px] desktop:h-[480px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div class="flex h-[168px] desktop:h-[195px] items-center gap-[24px] w-full px-[40px]">
          <img
            :src="model.profile"
            :alt="model.name"
            class="w-[75px] h-[75px] rounded-full bg-gray-100 object-cover border-2 border-[#416887]/40 group-hover:border-[#416887] transition-all duration-300"
          />
          <div class="flex flex-col items-start">
            <p class="text-[#416887] text-[21px] font-bold tracking-[1.05px]">{{ model.name }}</p>
            <p class="text-[#99A1A5] text-[15px] tracking-[0.75px]">{{ model.username }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import ScrollReveal from "scrollreveal";

const models = [
  {
    name: "Grace Perez",
    username: "@graceperez",
    image: "/assets/influencerone.svg",
    profile: "/assets/influencerone.svg",
  },
  {
    name: "Bella Marie",
    username: "@belamarie",
    image: "/assets/influencertwo.svg",
    profile: "/assets/influencertwo.svg",
  },
  {
    name: "Gigi Hadid",
    username: "@gigihadid",
    image: "/assets/influencerthree.svg",
    profile: "/assets/influencerthree.svg",
  },
];

onMounted(() => {
  const sr = ScrollReveal({
    distance: "60px",
    duration: 1500,
    easing: "ease-out",
    reset: false,
  });

  sr.reveal(".reveal", {
    origin: "bottom",
    interval: 150,
  });
});
</script>

<style scoped>
section {
  animation: fadeInUp 0.8s ease both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
