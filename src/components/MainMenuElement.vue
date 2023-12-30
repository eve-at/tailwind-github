<script setup>
defineProps({
    active: {
        type: Boolean,
        default: false
    },
    title: {
        type: String
    },
    count: {
        type: Number,
        default: 0
    }
})
</script>

<template>
    <a href="#" 
        class="flex items-center px-4 pb-3 border-b-2"
        :class="{ 
            'border-red-500 font-semibold': active,
            'border-transparent hover:border-gray-400 transition ease-in-out duration-150': !active
        }"
    >
        <slot/>
        <span class="ml-2 whitespace-nowrap">{{ title }}</span>
        <div v-if="count > 0" class="bg-gray-200 rounded-lg px-2 text-xs ml-1">{{ count }}</div>
    </a>
</template>