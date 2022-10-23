<script setup>
import { useSortableStore } from './stores/sortable';

import BaseBoard from './components/layout/BaseBoard.vue'
import DropContainer from './components/droppable/DropContainer.vue';
import DraggableItem from './components/draggable/DraggableItem.vue';
import BaseError from './components/ui/BaseError.vue';

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
            <drop-container list="common item" @on-drop="onDropHandler">
                <draggable-item 
                    :items="sortable.commonItems" 
                    @on-drag-start="onDragStartHandler">
                </draggable-item>
            </drop-container>

            <drop-container list="fruit" @on-drop="onDropHandler">
                <draggable-item 
                    :items="sortable.fruits" 
                    @on-drag-start="onDragStartHandler">
                </draggable-item>
            </drop-container>

            <drop-container list="vegetable" @on-drop="onDropHandler">
                <draggable-item 
                    :items="sortable.vegetables" 
                    @on-drag-start="onDragStartHandler">
                </draggable-item>
            </drop-container>
        </div>

        <base-error :has-error="sortable.hasError" message="Sorry, you are adding item on incorrect list"></base-error>
    </base-board>
</template>