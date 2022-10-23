<template>
    <div class="drag-el" v-for="item in props.items" :key="item.id" draggable="true"
        @dragstart="onDragStart($event, item)">
        {{ item.name }}
    </div>
</template>

<script setup>
const props = defineProps({
    items: Array
});

const emit = defineEmits(['onDragStart']);

const onDragStart = (...args) => emit('onDragStart', ...args);
</script>