<template>
  <div class="layout-toggle d-flex gap-2 mb-3">
    <img
      v-for="img in layoutTypes"
      height="20"
      :v-key="img.id"
      :src="activeLayout == img.value ? img.srcActive : img.src"
      :alt="img.name"
      :title="img.name"
      @click="change(img.value)"
      :class="activeLayout == img.value ? 'active' : ''"
    />
  </div>
</template>

<script>
export default {
  name: "LayoutToggle",
  data() {
    return {
      layoutTypes: [
        {
          id: "1",
          name: "grid layout 3 columns",
          value: "grid3",
          src: "/src/assets/img/layout-grid3.svg",
          srcActive: "/src/assets/img/layout-grid3-active.svg",
        },
        {
          id: "2",
          name: "grid layout 2 columns",
          value: "grid2",
          src: "/src/assets/img/layout-grid2.svg",
          srcActive: "/src/assets/img/layout-grid2-active.svg",
        },
        {
          id: "3",
          name: "row layout",
          value: "row",
          src: "/src/assets/img/layout-row.svg",
          srcActive: "/src/assets/img/layout-row-active.svg",
        },
      ],
      activeLayout: "grid3",
    };
  },

  methods: {
    change(value) {
      this.activeLayout = value;
      this.$emit("change", value);
    },
  },
};
</script>

<style scoped>
img {
  cursor: pointer;
}
</style>