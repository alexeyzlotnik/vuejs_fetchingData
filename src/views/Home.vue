 <script>
import PostsGrid from "../components/postsGrid.vue";
import commentModal from "../components/commentModal.vue";
import PostsGridAxiosData from "../components/postsGridAxiosData.vue";

export default {
  components: {
    PostsGrid,
    commentModal,
    PostsGridAxiosData,
  },
};
</script>
 
 <template>
  <h1 class="text-center title mb-0">Home page</h1>
  <posts-grid-axios-data
    sectionTitle="Axios Posts with Skeleton"
  ></posts-grid-axios-data>
  <posts-grid sectionTitle="Fetched Posts with Comments"></posts-grid>
</template>