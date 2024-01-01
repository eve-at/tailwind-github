<script setup>
    defineProps({
        count: {
            type: String
        },
        text: {
            type: String
        },
        hideTextOnMobile: {
            type: Boolean,
            default: false
        }
    });
</script>
<template>
    <a href="" class="flex space-x-1 items-center hover:text-blue-600 group">
        <slot class="text-gray-600 group-hover:text-blue-600" />
        <div class="flex item-center space-x-1">
            <span class="font-bold group-hover:text-blue-600" v-text="count"></span>
            <span 
                class="text-gray-600 group-hover:text-blue-600"
                :class="{
                    'hidden lg:block': hideTextOnMobile
                }"
                v-text="text"
            ></span>
        </div>
    </a>
</template>