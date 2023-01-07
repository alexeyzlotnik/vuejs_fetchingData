<template>
  <div class="footer container-fluid py-5">
    <div class="row">
      <div class="col-lg-6 m-auto">
        <p class="text-center text-white">
          FetchingData {{ new Date().getFullYear() }}. All right reserved
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: var(--background-color-primary);
  border-top: 1px solid #ccc;
}
</style>