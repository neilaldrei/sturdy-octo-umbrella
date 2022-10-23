import { defineStore } from "pinia";

export const useSortableStore = defineStore('sortable', {
    state: () => {
        return {
            nextId: 0,
            items: [
                {
                    id: 0,
                    title: 'Item A',
                    list: 1,
                },
                {
                    id: 1,
                    title: 'Item B',
                    list: 1,
                },
                {
                    id: 2,
                    title: 'Item C',
                    list: 2,
                },
            ],
        }
    },

    getters: {
        listOne() {
            return this.items.filter((item) => item.list == 1)
        },
        
        listTwo() {
            return this.items.filter((item) => item.list == 2)
        },
    },

    actions: {
        addItem(text) {
            // you can directly mutate the state
            this.items.push({ text, id: this.nextId++ })
        },

        dragStart(evt, item) {
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemID', item.id)
        },

        onDrop(evt, list) {
            const itemID = evt.dataTransfer.getData('itemID')
            const item = this.items.find((item) => item.id == itemID)
            item.list = list
        },
    },
});