<template>
  <div class="list w-100 d-flex flex-column">
    <TransitionGroup name="list" tag="div">
      <div v-for="(item, index) in list" :key="item.id" class="mb-3">
        <div v-if="item.is_editing_card" class="list-item edit">
          <input
            type="text"
            v-model="item.title"
            placeholder="add your title here"
          />
          <textarea
            v-model="item.content"
            placeholder="add your content here"
            >{{ item.content }}</textarea
          >

          <AcceptIcon class="save" @click="handleEditCard('save', item)" />
        </div>

        <div
          v-else
          class="list-item"
          @mouseover="hoverIndex = index"
          @mouseleave="hoverIndex = null"
          @dblclick="handleEditCard('change', item)"
        >
          <h6>{{ item.title }}</h6>
          <p>{{ item.content }}</p>
          <CancelIcon
            v-if="hoverIndex == index"
            class="delete"
            @click="$emit('removeItem', index)"
          />
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import AcceptIcon from "../icons/acceptIcon.vue";
import CancelIcon from "../icons/cancelIcon.vue";

let props = defineProps({
  list: Object,
});

let emits = defineEmits(["removeItem"]);

const handleEditCard = (type, selectedCard) => {
  if (type === "change") {
    selectedCard.is_editing_card = true;
    state.tempCards = vuello.cards.map((card) => ({ ...card }));
  } else if (type === "save") {
    selectedCard.is_editing_card = false;
  }
};

let hoverIndex = ref(null);
</script>

<style scoped>
.list-item {
  background: #fff;
  border-radius: 3px;
  padding: 15px;
  position: relative;
}

.list-item p {
  margin: 0;
}

.list-item .delete {
  position: absolute;
  right: 10px;
  top: 10px;
}

p,
h6 {
  color: #0f0f0f;
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

svg.save {
  background-color: rgb(59 130 246);
  border-radius: 50%;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>