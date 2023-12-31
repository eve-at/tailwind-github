<script setup>
import RoundedGroup from './RoundedGroup.vue';
import TagMenuElement from './TagMenuElement.vue';
</script>

<template>
    <div class="branch-navigation flex items-center justify-between">
        <div class="flex items-center space-x-3">
            <RoundedGroup title="master" :title-bold="true">
                <svg text="gray" viewBox="0 0 16 16" aria-hidden="true" class="fill-current text-gray-600 w-4">
                    <path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path>
                </svg>
            </RoundedGroup>
            <TagMenuElement count="25" text="branches">
                <svg class="fill-current text-gray-600 w-4" text="gray" viewBox="0 0 16 16" aria-hidden="true">
                    <path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path>
                </svg>
            </TagMenuElement>
            <TagMenuElement count="79" text="tags">
                <svg class="fill-current text-gray-600 w-4" text="gray" viewBox="0 0 16 16" aria-hidden="true">
                    <path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path>
                </svg>
            </TagMenuElement>
        </div>
        <div class="flex items-center space-x-2 ml-2">
            <RoundedGroup :title-bold="true" title="Go to file" />
            <RoundedGroup :title-bold="true" title="Add file" />
            <RoundedGroup :title-bold="true" title="Code" green="true">
                <svg class="w-4 fill-current text-gray-200" viewBox="0 0 16 16" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>
                </svg>
            </RoundedGroup>
        </div>
    </div>
</template>