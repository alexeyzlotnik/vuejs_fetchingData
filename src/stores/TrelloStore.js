import {
    defineStore
} from "pinia";

export let useTrelloStore = defineStore('trello', {
    state: () => ({
        mainTitle: '',
        columns: [],
    }),

    actions: {
        async fill() {
            let r = await import('/src/trello.json');

            let data = r.default;

            this.mainTitle = data.mainTitle;
            this.columns = data.columns;
        },
    },

    // getters: {
    //     spotsRemaining() {
    //         return this.spots - this.members.length;
    //     }
    // }
});