<template>
  <div
    v-for="post in filteredPosts"
    :class="layoutClass + ' posts-item posts-item' + post.id"
    :key="post.id"
  >
    <div class="posts-item__body">
      <span class="post-item__tag">Id: {{ post.id }}</span>
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>

      <button
        v-show="withModal"
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        :data-target="'#modal_' + post.id"
        @click="
          sendInfoToModal({
            post_title: post.title,
            post_id: post.id,
          })
        "
      >
        open comments
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Posts",
  data() {
    return {
      passedDataToModal: {
        post_title: null,
        post_id: null,
      },
    };
  },
  props: {
    filteredPosts: null,
    layoutClass: String,
    withModal: { type: Boolean, default: true },
  },
  methods: {
    sendInfoToModal(item) {
      this.passedDataToModal = item;
      this.$emit("sendInfoToModal", this.passedDataToModal);
    },
  },
};
</script>

<style scoped>
</style>