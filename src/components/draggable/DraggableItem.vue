<template>
    <div class="drag-el" v-for="item in props.items" :key="item.title" draggable="true"
        @dragstart="onDragStart($event, item)">
        {{ item.title }}
    </div>
</template>

<script setup>
const props = defineProps({
    items: Array
});

const emit = defineEmits(['onDragStart']);

const onDragStart = (...args) => emit('onDragStart', ...args);
</script>