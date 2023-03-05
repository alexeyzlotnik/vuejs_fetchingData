<template>
  <div class="trello container">
    <div class="trello-wrapper row d-flex gap-3">

      <form id="search" @submit.prevent="">
        <input name="query" v-model="searchQuery">
      </form>

      <TrelloColumn
        v-for="column in trello.columns"
        :key="column.id"
        class="col-3"
        v-model:title="column.title"
        :columnId="column.id"
        :filter-key="searchQuery"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TrelloColumn from "./TrelloColumn.vue";
import { useTrelloStore } from "../../stores/TrelloStore";

let trello = useTrelloStore();
let searchQuery = ref('');

// let columns = ref([
//   { id: 1, title: "To Do" },
//   { id: 2, title: "Doing" },
//   { id: 3, title: "Done" },
// ]);
</script>

<style scoped>
</style>