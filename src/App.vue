<script setup>
import { useSortableStore } from './stores/sortable';

import BaseBoard from './components/layout/BaseBoard.vue'
import DropContainer from './components/droppable/DropContainer.vue';
import DraggableItem from './components/draggable/DraggableItem.vue';

const sortable = useSortableStore()

const onDragStartHandler = (...params) => {
    const [e, list] = params;

    sortable.dragStart(e, list);
}

const onDropHandler = (...params) => {
    const [e, list] = params;

    sortable.onDrop(e, list);
}

</script>
    
<template>
    <base-board>
        <div class="row">
            <drop-container list="1" @on-drop="onDropHandler">
                <draggable-item 
                    :items="sortable.listOne" 
                    @on-drag-start="onDragStartHandler">
                </draggable-item>
            </drop-container>

            <drop-container list="2" @on-drop="onDropHandler">
                <draggable-item 
                    :items="sortable.listTwo" 
                    @on-drag-start="onDragStartHandler">
                </draggable-item>
            </drop-container>
        </div>
    </base-board>
</template>