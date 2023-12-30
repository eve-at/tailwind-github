<script setup>
import Chevron from './Chevron.vue';

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
    <div class="flex text-xs">
        <button class="border border-gray-400 rounded rounded-r-none px-3 py-1 flex items-center space-x-1">
        <slot />
        <div>{{ title }}</div>
        <Chevron />
        </button>
        <a href="#" class="border border-gray-400 rounded rounded-l-none border-l-0 font-semibold px-3 py-1 hover:text-blue-600">
            {{ count }}
        </a>
    </div>
</template>