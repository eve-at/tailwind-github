<script setup>
defineProps({
    folder: {
        type: Boolean,
        default: false
    },
    name: {
        type: String
    },
    desc: {
        type: String
    },
    timestamp: {
        type: String
    },
})
</script>

<template>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-200">
        <div class="w-4/12 flex items-center space-x-2">
            <svg v-if="folder" class="w-4 fill-current text-blue-400" color="blue-3" aria-label="Directory" viewBox="0 0 16 16" role="img">
                <path fill-rule="evenodd" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path>
            </svg>
            <svg v-if="!folder" class="w-4 fill-current text-gray-600" color="gray-light" aria-label="File" viewBox="0 0 16 16" role="img">
                <path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
            </svg>
            <a href="#" v-text="name" class="text-sm hover:underline hover:text-blue-600"></a>
        </div>
        <div class="hidden lg:block w-6/12">
            <a href="#" v-text="desc" class="text-sm hover:underline hover:text-blue-600"></a>
        </div>
        <div class="w-4/12 lg:w-2/12 text-right">
            <span v-text="timestamp" class="text-sm whitespace-nowrap"></span>
        </div>
    </div>
</template>