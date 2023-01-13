<template>
  <div class="trello container">
    <div class="trello-wrapper row d-flex gap-3">
      <TrelloColumn
        v-for="column in columns"
        :key="column.id"
        class="col-3"
        v-model:title="column.title"
        :columnId="column.id"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import TrelloColumn from "./TrelloColumn.vue";

let columns = ref([
  { id: 1, title: "To Do" },
  { id: 2, title: "Doing" },
  { id: 3, title: "Done" },
]);
</script>

<style scoped>
</style>