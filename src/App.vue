<template>
  <div class="w-full flex flex-col">
    <Header @show-form="showFormPopup"/>
    <PageContent />
    <Models />
    <Form @close="closeForm" v-if="showForm"/>
    <Footer @show-form="showFormPopup" />
  </div>
</template>

<script setup>
  import Form from './components/Form.vue';
  import Header from './components/Header.vue';
  import PageContent from './components/PageContent.vue';
  import Models from './components/Models.vue';
  import Footer from './components/Footer.vue';
  import { ref } from 'vue';
  const showForm = ref(false);
  const closeForm = () => {
    showForm.value = false;
  };
  const showFormPopup = () => {
    showForm.value = true;
  };
</script>