<script setup>
import { ref, watch } from "vue";
import AddItem from "./AddItem.vue";
import List from "./List.vue";

let props = defineProps({
  title: String,
  columnId: Number,
});

let emits = defineEmits(["update:title"]);

let columnTitle = ref(props.title);

let list = ref(JSON.parse(localStorage.getItem("trello-list") || "[]"));

watch(() => {
  localStorage.setItem("trello-list", JSON.stringify(list.value));
});

// methods
let updateTitle = (text) => {
  emits("update:title", text);
  columnTitle.value = text;
};

let addNewItem = (newItem) => {
  list.value.push(newItem);
};
</script>


<template>
  <div class="trello-column">
    <input
      class="trello-column__title w-100 mb-3"
      type="text"
      :value="props.title"
      @input="updateTitle($event.target.value)"
    />

    <List :list="list.filter((a) => a.id === props.columnId)" />

    <AddItem @new-item="addNewItem" :column-id="columnId" />
  </div>
</template>


<style scoped>
.trello-column {
  border-radius: 3px;
  background: var(--background-color-secondary);
  padding: 15px;
}

.trello-column input {
  background: var(--background-color-secondary);
  box-shadow: none;
  border: none;
}

.trello-column input:focus {
  background-color: #ccc;
  outline: none;
}
</style>