<template>
  <section class="posts container">
    <div class="row">
      <h1 class="title mb-3 text-center">{{ sectionTitle }}</h1>

      <div class="posts-filters d-flex">
        <div class="row w-100 mx-0">
          <div
            v-if="filterTag.length"
            class="
              posts-sort
              col-lg-8
              offset-lg-2
              text-center
              mb-5
              d-flex
              gap-3
              justify-content-center
            "
          >
            <span>Sort</span>
            <div class="d-flex gap-3">
              <div
                v-for="tag in filterTag"
                @click="currentTag = tag.value"
                class="posts-sort__tag"
                :class="currentTag == tag.value ? 'active' : ''"
              >
                {{ tag.name }}
              </div>
            </div>
          </div>

          <LayoutToggle
            @change="changeLayout"
            class="col-lg-2 align-items-end justify-content-end"
          />
        </div>
      </div>
      <Posts
        v-if="filteredPosts"
        @sendInfoToModal="sendInfoToModal"
        :layoutClass="layoutClass"
        :filteredPosts="filteredPosts"
      />
      <PostsSkeleton v-else />
    </div>
  </section>

  <commentModal
    v-if="commentModalActive"
    @close="closeModal"
    class="posts-item__comments show"
    :id="'modal_' + passedDataToModal.post_id"
  >
    <template #header>
      <h5>Comment for "{{ passedDataToModal.post_title }}"</h5>
    </template>

    <div
      class="comment-item"
      :key="comment.id"
      v-for="comment in filteredComments(passedDataToModal.post_id)"
    >
      <div class="author d-flex align-items-center gap-3">
        <div class="image">
          <img
            class="uk-comment-avatar"
            src="../assets/img/avatar.jpeg"
            width="80"
            height="80"
            alt=""
          />
        </div>
        <div class="author-data d-flex flex-column">
          <h4 class="title">
            {{ comment.name }}
          </h4>
          <a :href="'mailto:' + comment.email">{{ comment.email }}</a>
        </div>
      </div>
      <div class="body mt-3">
        <p>{{ comment.body }}</p>
      </div>
    </div>

    <template #footer></template>
    <!-- </div> -->
  </commentModal>
</template>





<script>
import commentModal from "./commentModal.vue";
import LayoutToggle from "./LayoutToggle.vue";
import Posts from "./Posts.vue";
import PostsSkeleton from "./PostsSkeleton.vue";

export default {
  components: {
    commentModal,
    LayoutToggle,
    Posts,
    PostsSkeleton,
  },

  data() {
    return {
      postData: null,
      commentsData: null,
      mergeCommentsAndPosts: null,
      passedDataToModal: {
        post_title: null,
        post_id: null,
      },
      filterTag: [
        { name: "Alphabetically", value: "byName" },
        { name: "By id", value: "byId" },
      ],
      currentTag: "",
      currentLayout: "",
      layoutClass: "col-4",
      commentModalActive: false,
    };
  },
  props: {
    sectionTitle: String,
  },
  methods: {
    async fetchData() {
      // posts
      this.postData = null;

      const posts = await fetch(
        `https://jsonplaceholder.typicode.com/posts/?_limit=10'`
      );
      this.postData = await posts.json();

      // comments
      this.commentsData = null;
      const comments = await fetch(
        `https://jsonplaceholder.typicode.com/comments/?_limit=50'`
      );
      this.commentsData = await comments.json();
    },

    showCurrentModal() {
      this.commentModalActive = true;
    },

    closeModal() {
      this.commentModalActive = false;
    },

    sendInfoToModal(item) {
      this.passedDataToModal = item;
      this.commentModalActive = true;
    },

    filteredComments(post) {
      return this.commentsData.filter((a) => a.postId === post);
    },

    changeLayout(value) {
      this.currentLayout = value;

      if (this.currentLayout === "grid2") {
        this.layoutClass = "col-6";
      } else if (this.currentLayout === "grid3") {
        this.layoutClass = "col-4";
      } else if (this.currentLayout === "row") {
        this.layoutClass = "col-8 m-auto mb-3";
      }
    },
  },

  mounted() {
    this.fetchData();
  },
  watch: {
    postId() {
      this.fetchData();
    },
  },
  computed: {
    filteredPosts() {
      let sortedPosts = this.postData;
      // by ID
      if (this.currentTag == "byId") {
        sortedPosts = sortedPosts.sort((a, b) => {
          return a.id - b.id;
        });
        return sortedPosts;
      } else if (this.currentTag == "byName") {
        // alphabetically
        sortedPosts = sortedPosts.sort((a, b) => {
          let fa = a.title.toLowerCase(),
            fb = b.title.toLowerCase();
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
        return sortedPosts;
      } else {
        return this.postData;
      }
    },
  },
};
</script>




<style scoped>
.posts-sort span {
  color: var(--text-primary-color);
}

.posts-sort__tag {
  border: 1px solid var(--accent-color);
  color: var(--text-primary-color);
  padding: 0px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.posts-sort__tag.active {
  background: var(--accent-color);
}
</style>