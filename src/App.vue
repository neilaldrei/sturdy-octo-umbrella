<script setup>
import { useSortableStore } from './stores/sortable';

import BaseBoard from './components/layout/BaseBoard.vue'
import DropContainer from './components/droppable/DropContainer.vue';
import DraggableItem from './components/draggable/DraggableItem.vue';

const sortable = useSortableStore()

const onDragStartHandler = (...params) => {
    const [e, item] = params;

    sortable.dragStart(e, item);
}

const onDropHandler = (...params) => {
    const [e, list] = params;

    sortable.onDrop(e, list);
}

</script>
    
<template>
    <base-board>
        <div class="row">
            <drop-container list="common items" @on-drop="onDropHandler">
                <draggable-item 
                    :items="sortable.commonItems" 
                    @on-drag-start="onDragStartHandler">
                </draggable-item>
            </drop-container>

            <drop-container list="fruits" @on-drop="onDropHandler">
                <draggable-item 
                    :items="sortable.fruits" 
                    @on-drag-start="onDragStartHandler">
                </draggable-item>
            </drop-container>

            <drop-container list="vegetables" @on-drop="onDropHandler">
                <draggable-item 
                    :items="sortable.vegetables" 
                    @on-drag-start="onDragStartHandler">
                </draggable-item>
            </drop-container>
        </div>
    </base-board>
</template>