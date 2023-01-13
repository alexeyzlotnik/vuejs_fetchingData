<script setup>
import { computed, ref, watch } from "vue";
import AddItem from "./AddItem.vue";
import List from "./List.vue";
import CancelIcon from "../icons/cancelIcon.vue";

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

let removeItem = (item) => {
  console.log(item);
  list.value.splice(item, 1);
};

let removeAllItems = (iem) => {
  list.value = [];
};

let filteredList = computed(() => {
  return list.value.filter((a) => a.id === props.columnId);
});
</script>


<template>
  <div class="trello-column">
    <div class="d-flex w-100 mb-3">
      <div class="row w-100 m-auto">
        <input
          class="trello-column__title col-11 px-0"
          type="text"
          :value="
            filteredList.length
              ? props.title + ' (' + filteredList.length + ')'
              : props.title
          "
          @input="updateTitle($event.target.value)"
        />

        <CancelIcon
          v-if="filteredList.length"
          class="delete col-1 p-0"
          role="button"
          @click="removeAllItems"
        />
      </div>
    </div>

    <List :list="filteredList" @remove-item="removeItem" />

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