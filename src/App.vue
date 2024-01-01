<script setup>
import Header from "./components/Header.vue";
import RoundedGroup from "./components/RoundedGroup.vue";
import MainMenu from "./components/MainMenu.vue";
import ContainerMenu from "./components/ContainerMenu.vue";
import CommitsContainer from "./components/CommitsContainer.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="text-gray-900 text-sm">
    <Header />

    <div class="repo-stats flex flex-col lg:flex-row items-center justify-between px-8 py-4">
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
      
      <div class="flex space-x-2 lg:ml-2 mt-4 lg:mt-0">
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

    <div class="container mx-auto my-8 px-4 flex flex-col lg:flex-row">
      <div class="file-explorer w-full lg:w-3/4 lg:mr-8">
        <ContainerMenu />
        <CommitsContainer />
        <div class="readme-container border border-b-gray-300 rounded-md px-4 py-2 mt-4">
          <h4 class="font-semibold">README.md</h4>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, id commodi dolore pariatur ratione, cumque veritatis ex quaerat laboriosam qui, iste sequi maiores ut vero provident maxime laudantium consequuntur aliquam!
          </div>
        </div>
      </div>
      <div class="sidebar w-full lg:w-1/4 mt-4 lg:mt-0">
        <Sidebar />
      </div>      
    </div>

    <Footer />
  </div>
</template>