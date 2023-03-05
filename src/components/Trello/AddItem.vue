<template>
  <button
    v-if="!addingNewItem"
    @click="addingNewItem = !addingNewItem"
    class="btn btn-primary"
  >
    <svg
      viewBox="0 0 24 24"
      height="15px"
      stroke="currentColor"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
    Add new task
  </button>

  <div class="form" v-if="addingNewItem">
    <input
      type="text"
      name="title"
      placeholder="Add card title *"
      v-model="title"
    />
    <textarea
      type="text"
      name="content"
      placeholder="Add card content"
      v-model="content"
    ></textarea>
    <div class="mt-2 d-flex w-100 align-items-center justify-content-end">
      <AcceptIcon @click="addItemApprove" />
      <CancelIcon @click="addItemCancel" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AcceptIcon from "../icons/AcceptIcon.vue";
import CancelIcon from "../icons/CancelIcon.vue";

let props = defineProps({
  columnId: Number,
});

let title = ref("");
let content = ref("");
let newItem = ref(Object);

let emits = defineEmits(["newItem"]);

let addNewItem = () => {
  if (title.value !== "") {
    newItem = {
      id: props.columnId,
      title: title.value,
      content: content.value,
    };

    emits("newItem", newItem);
  }
};

let addingNewItem = ref(false);

let addItemApprove = () => {
  addNewItem();
  addingNewItem.value = false;
  title.value = "";
  content.value = "";
};

let addItemCancel = () => {
  addingNewItem.value = false;
  title.value = "";
  content.value = "";
};
</script>

<style scoped>
.form {
  background: #fff;
  padding: 10px;
}

svg {
  cursor: pointer;
}

input,
textarea {
  width: 100%;
  border-radius: 3px;
  border: none;
  margin-bottom: 1rem;
  height: 35px;
  padding: 15px;
  background: rgb(242, 241, 241);
}

textarea {
  height: 80px;
  margin-bottom: 0;
}
</style>