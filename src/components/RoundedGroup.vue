<script setup>
import Chevron from './Chevron.vue';

defineProps({
    title: {
        type: String
    },
    count: {
        type: String
    },
    titleBold: {
        type: Boolean,
        default: false
    },
    green: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="flex text-xs">
        <button 
            class="border border-gray-400 rounded px-3 py-1 flex items-center space-x-1"
            :class="{
                'rounded-r-none': count > 0,
                'bg-green-600 hover:bg-green-700 text-white': green
            }"
        >
        <slot />
        <div 
            class="whitespace-nowrap"
            :class="{
                'font-semibold': titleBold
            }"
        >
            {{ title }}
        </div>
        <Chevron />
        </button>
        <a v-if="count > 0" href="#" class="border border-gray-400 rounded rounded-l-none border-l-0 font-semibold px-3 py-1 hover:text-blue-600">
            {{ count }}
        </a>
    </div>
</template>