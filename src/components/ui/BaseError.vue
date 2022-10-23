<template>
    <div class="error" v-if="hasError">
        <p v-text="message"></p>
    </div>
</template>

<script setup>
const props = defineProps({
    hasError: Boolean,
    message: String
});
</script>