<script setup>
    defineProps({
        count: {
            type: String
        },
        text: {
            type: String
        }
    });
</script>
<template>
    <a href="" class="flex space-x-1 items-center hover:text-blue-600 group">
        <slot class="text-gray-600 group-hover:text-blue-600" />
        <div>
            <span class="font-bold group-hover:text-blue-600" v-text="count"></span>&nbsp;<span class="text-gray-600 group-hover:text-blue-600" v-text="text"></span>
        </div>
    </a>
</template>