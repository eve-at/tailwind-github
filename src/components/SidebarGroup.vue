<script setup>
import TagElement from './TagElement.vue';
defineProps({
    title: {
        type: String
    },
    count: {
        type: String
    }
})
    
</script>

<template>
    <div class="border-b border-gray-300 pb-6 mb-4">
        <h4 class="text-base font-semibold">
            {{ title }}&nbsp;<span v-if="count" v-text="count" class="rounded-xl py-1 px-2 text-xs bg-gray-200 sont-semibold"></span>
        </h4>
        <slot />
    </div>
</template>