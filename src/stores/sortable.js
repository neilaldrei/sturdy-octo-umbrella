import { defineStore } from "pinia";

export const useSortableStore = defineStore('sortable', {
    state: () => {
        return {
            nextId: 0,
            items: [
                {
                    id: 1,
                    name: "Eggplant",
                    type: "common items"
                },
                {
                    id: 2,
                    name: "Mango",
                    type: "common items"
                },
                {
                    id: 3,
                    name: "Apple",
                    type: "common items"
                },
                {
                    id: 4,
                    name: "Strawberry",
                    type: "common items"
                },
                {
                    id: 5,
                    name: "Cabbage",
                    type: "common items"
                },
                {
                    id: 6,
                    name: "Carrots",
                    type: "common items"
                },
                {
                    id: 7,
                    name: "Potato",
                    type: "common items"
                },
            ],
        }
    },

    getters: {
        commonItems() {
            return this.items.filter((item) => item.type == 'common items')
        },
        
        fruits() {
            return this.items.filter((item) => item.type == 'fruits')
        },
        
        vegetables() {
            return this.items.filter((item) => item.type === 'vegetables')
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
            const item = this.items.find((item) => item.id === parseInt(itemID))
            console.log(item, itemID, list);
            item.type = list
        },
    },
});