import { defineStore } from "pinia";

export const useSortableStore = defineStore('sortable', {
    state: () => {
        return {
            nextId: 0,
            items: [
                {
                    id: 1,
                    name: "Eggplant",
                    type: "vegetable",
                    list: 'common item'
                },
                {
                    id: 2,
                    name: "Mango",
                    type: "fruit",
                    list: 'common item'
                },
                {
                    id: 3,
                    name: "Apple",
                    type: "fruit",
                    list: 'common item'
                },
                {
                    id: 4,
                    name: "Strawberry",
                    type: "fruit",
                    list: 'common item'
                },
                {
                    id: 5,
                    name: "Cabbage",
                    type: "vegetable",
                    list: 'common item'
                },
                {
                    id: 6,
                    name: "Carrots",
                    type: "vegetable",
                    list: 'common item'
                },
                {
                    id: 7,
                    name: "Potato",
                    type: "vegetable",
                    list: 'common item'
                },
            ],
        }
    },

    getters: {
        commonItems() {
            return this.items.filter((item) => item.list == 'common item')
        },
        
        fruits() {
            return this.items.filter((item) => item.list == 'fruit')
        },
        
        vegetables() {
            return this.items.filter((item) => item.list === 'vegetable')
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
            if (item.type === list) {
                item.list = list
            }
        },
    },
});