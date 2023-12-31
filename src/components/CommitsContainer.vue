<script setup>
import TagMenuElement from './TagMenuElement.vue';
import CommitLine from './CommitLine.vue';
</script>

<template>
    <div 
        class="commits-container bg-blue-100 rounded-md rounded-b-none border border-blue-200 border-b-0 flex items-center justify-between px-4 py-2 mt-5"
    >
        <div class="flex items-center space-x-2">
            <a href="#" class="flex items-center hover:text-gray-400">
                <img class="w-6 h-6 rounded-full border border-gray-600" src="https://avatars.githubusercontent.com/u/55398804?v=4" alt="" size="32" height="32" width="32" data-view-component="true">
            </a>
            <a href="#" class="font-semibold hover:underline">eve-at</a>  
            <a href="#" class="hover:underline">1.5.1</a>  
        </div>   

        <div class="flex space-x-3 items-end">
            <a href="#">
                <svg class="w-4 fill-current text-green-500" aria-label="3 / 3 checks OK" viewBox="0 0 16 16" role="img">
                    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                </svg>
            </a>
            <a href="#" class="font-mono text-xs text-gray-600 hover:underline hover:text-blue-500">
                da070bd
            </a>
            <TagMenuElement count="3,040" text="commits">
                <svg class="w-4 fill-current after:text-gray-600" text="gray" viewBox="0 0 16 16" aria-hidden="true">
                    <path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"></path>
                </svg>
            </TagMenuElement>
        </div>    
    </div>

    <div 
        class="file-explorer rounded-md rounded-t-none border border-gray-300 border-t-0 text-gray-700 divide-y divide-gray-300"
    >
        <CommitLine 
            :folder="true" 
            name=".github"
            desc="Update issues template"
            timestamp="11 days ago"
        />
        <CommitLine 
            :folder="true" 
            name="__tests__"
            desc="Remove stale test"
            timestamp="4 days ago"
        />
        <CommitLine 
            :folder="true" 
            name="dist"
            desc="Add empty .npmignore so dist files are distributed with releases"
            timestamp="3 years ago"
        />
        <CommitLine 
            :folder="true" 
            name="jest"
            desc="Use `process.env.JEST_WORKER_ID`"
            timestamp="15 months ago"
        />
        <CommitLine 
            :folder="true" 
            name="scripts"
            desc="Prevent source maps from being generated"
            timestamp="21 days ago"
        />
        <CommitLine 
            :folder="true" 
            name="src"
            desc="Only wrap with variants if rules don't already contain any variants"
            timestamp="4 days ago"
        />
        <CommitLine 
            :folder="true" 
            name="stubs"
            desc="Generate responsive variants for container by default"
            timestamp="4 days ago"
        />
        <CommitLine 
            :folder="false" 
            name=".editorconfig"
            desc="Convert new stuff to use ES6 modules"
            timestamp="3 years ago"
        />
        <CommitLine 
            :folder="false" 
            name=".editorconfig"
            desc="Convert new stuff to use ES6 modules"
            timestamp="3 years ago"
        />
        <CommitLine 
            :folder="false" 
            name="README.md"
            desc="Add alt attribute to logo"
            timestamp="2 monts ago"
        />
    </div>
</template>