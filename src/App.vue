<script setup>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
// import PostsGrid from "./components/postsGrid.vue";
// import commentModal from "./components/commentModal.vue";
// import PostsGridAxiosData from "./components/postsGridAxiosData.vue";
</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>
  <Footer />
</template>