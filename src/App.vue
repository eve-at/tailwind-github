<script setup>

</script>

<template>
  <div class="text-gray-900 text-sm">
    <nav class="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <a class="text-white hover:text-gray-400" href="https://github.com/eve-at/tailwind-github" target="_blank">
          <svg class="w-8 fill-current" aria-hidden="true" viewBox="0 0 16 16" data-view-component="true">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
        </a>
        <div class="relative">
          <input 
            class="rounded bg-gray-700 placeholder-white w-72 px-3 py-1" 
            placeholder="Search or jump to..."
            type="text" value=""
          >
          <div class="absolute top-0 right-0 flex items-center h-full">
            <div class="border border-gray-600 rounded text-xs text-gray-400 px-2 mr-2">/</div>
          </div>
        </div>
        <ul class="flex items-center font-semibold space-x-4">
          <li><a href="#" class="hover:text-gray-400">Pull requests</a></li>
          <li><a href="#" class="hover:text-gray-400">Issues</a></li>
          <li><a href="#" class="hover:text-gray-400">Marketplace</a></li>
          <li><a href="#" class="hover:text-gray-400">Explore</a></li>
        </ul>
      </div>

      <div class="flex items-center space-x-4 text-white">
        <a href="#" class="relative hover:text-gray-400">
          <svg class="w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
          <div class="absolute bg-blue-600 w-2 h-2 rounded-full top-0 right-0"></div>
        </a>
        <a href="#" class="flex items-center hover:text-gray-400">
          <svg class="w-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 4v16m8-8H4"></path>
          </svg>
          <svg class="w-3 ml-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
        <a href="#" class="flex items-center hover:text-gray-400">
          <img class="w-6 h-6 rounded-full" src="https://avatars.githubusercontent.com/u/55398804?v=4" alt="" size="32" height="32" width="32" data-view-component="true">
          <svg class="w-3 ml-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </nav>
  </div>
</template>