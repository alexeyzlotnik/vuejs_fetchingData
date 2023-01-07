<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import PostsGrid from "@/components/postsGrid.vue";
import commentModal from "@/components/commentModal.vue";
import PostsGridAxiosData from "@/components/postsGridAxiosData.vue";

export default {
  components: {
    Header,
    Footer,
    PostsGrid,
    commentModal,
    PostsGridAxiosData,
  },
};
</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>
  <Footer />
</template>