<script setup>
import Chevron from "./components/Chevron.vue"
import RoundedGroup from "./components/RoundedGroup.vue";
import MainMenu from "./components/MainMenu.vue";
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
          <li><a href="#" class="hover:text-gray-400 whitespace-nowrap">Pull requests</a></li>
          <li><a href="#" class="hover:text-gray-400 whitespace-nowrap">Issues</a></li>
          <li><a href="#" class="hover:text-gray-400 whitespace-nowrap">Marketplace</a></li>
          <li><a href="#" class="hover:text-gray-400 whitespace-nowrap">Explore</a></li>
        </ul>
      </div>

      <div class="flex items-center space-x-4 text-white ml-2">
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
          <Chevron />
        </a>
        <a href="#" class="flex items-center hover:text-gray-400">
          <img class="w-6 h-6 rounded-full" src="https://avatars.githubusercontent.com/u/55398804?v=4" alt="" size="32" height="32" width="32" data-view-component="true">
          <Chevron />
        </a>
      </div>
    </nav>

    <div class="repo-stats flex items-center justify-between px-8 py-4">
      <div class="flex">
        <svg class="w-4 fill-current text-gray-600" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
        </svg>
        <div class="flex items-center text-xl ml-2">
          <a href="#" class="text-blue-600 hover:underline">tailwindcss</a>
          <span class="mx-1">/</span>
          <a href="#" class="text-blue-600 hover:underline font-semibold">tailwindcss</a>
        </div>
      </div>
      
      <div class="flex space-x-2 ml-2">
        <RoundedGroup title="Watch" count="430">
          <svg class="fill-current text-gray-600 w-4" viewBox="0 0 16 16" aria-hidden="true">
            <path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
        </RoundedGroup>

        <RoundedGroup title="Star" count="25.3k">
          <svg class="fill-current text-gray-600 w-4" viewBox="0 0 16 16" aria-hidden="true">
            <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
          </svg>
        </RoundedGroup>

        <RoundedGroup title="Fork" count="1.3k">
          <svg class="fill-current text-gray-600 w-4" viewBox="0 0 16 16" aria-hidden="true">
            <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
          </svg>
        </RoundedGroup>
      </div>
    </div> <!-- end repo-stats -->

    <MainMenu />
  </div>
</template>