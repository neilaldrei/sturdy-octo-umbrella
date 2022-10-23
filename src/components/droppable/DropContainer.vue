<template>
    <div class="col card" @drop="onDrop($event, props.list)" @dragover.prevent @dragenter.prevent>
        <h1>{{ props.list }}</h1>
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    list: String
});

const emit = defineEmits(['onDrop']);

const onDrop = (...args) => emit('onDrop', ...args);
</script>