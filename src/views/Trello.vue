 <script setup>
import TrelloBoard from "../components/Trello/TrelloBoard.vue";
import { useTrelloStore } from "../stores/TrelloStore";
let trello = useTrelloStore();

trello.fill();
</script>
 
 <template>
  <section>
    <h1 class="text-center title mb-5">{{ trello.mainTitle }}</h1>
    <TrelloBoard />
  </section>
</template>