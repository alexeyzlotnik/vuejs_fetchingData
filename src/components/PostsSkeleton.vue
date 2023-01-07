<template>
  <div v-for="(item, i) in 9" :key="i" class="col-lg-4 posts-item posts-item">
    <div class="posts-item__body">
      <span class="post-item__tag p-0">
        <AnimatedPlaceholder height="28px" width="67px" borderRadius="5px" />
      </span>
      <h3>
        <AnimatedPlaceholder height="25px" width="200px" />
      </h3>
      <p>
        <AnimatedPlaceholder height="16px" width="300px" />
        <AnimatedPlaceholder height="16px" width="300px" />
        <AnimatedPlaceholder height="16px" width="300px" />
        <AnimatedPlaceholder height="16px" width="300px" />
      </p>

      <button
        type="button"
        class="btn btn-primary p-0 border-0"
        v-show="showButton"
      >
        <AnimatedPlaceholder height="38px" width="126px" borderRadius="5px" />
      </button>
    </div>
  </div>
</template>

<script setup>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
</script>

<script>
export default {
  props: {
    showButton: { type: Boolean, default: true },
  },
};
</script>



<style scoped>
.summary-placeholder {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
</style>