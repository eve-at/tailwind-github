<script setup>
import SidebarGroup from './SidebarGroup.vue';
import TagElement from './TagElement.vue';


</script>

<template>
    <SidebarGroup title="About">
        <p class="mt-4">A utility-first CSS framework for rapid UI development.</p>
        <div class="flex text-sm space-x-2 mt-4">
            <svg class="w-4 fill-current" mr="2" classes="flex-shrink-0" viewBox="0 0 16 16" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
            </svg>
            <a href="#" class="text-blue-600 font-semibold hover:underline">tailwindcss.com/</a>
        </div>
        <div class="keywords text-xs mt-3 font-semibold items-center flex flex-wrap">
            <a href="#" class="whitespace-nowrap mr-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 px-2 py-1 mt-1">tailwindcss</a>
            <a href="#" class="whitespace-nowrap mr-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 px-2 py-1 mt-1">css</a>
            <a href="#" class="whitespace-nowrap mr-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 px-2 py-1 mt-1">css-framework</a>
            <a href="#" class="whitespace-nowrap mr-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 px-2 py-1 mt-1">postcss</a>
            <a href="#" class="whitespace-nowrap mr-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 px-2 py-1 mt-1">functional-css</a>
            <a href="#" class="whitespace-nowrap mr-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 px-2 py-1 mt-1">utility-classes</a>
            <a href="#" class="whitespace-nowrap mr-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 px-2 py-1 mt-1">responsive</a>
        </div>
        <div class="mt-6">
            <TagElement text="Readme">
                <svg class="w-4 fill-current text-gray-600 group-hover:text-blue-600" mr="2" viewBox="0 0 16 16" aria-hidden="true">
                <path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
                </svg>
            </TagElement>
        </div>
        <div class="mt-6">
            <TagElement text="MIT Licence">
                <svg class="w-4 fill-current text-gray-600 group-hover:text-blue-600" mr="2" viewBox="0 0 16 16" aria-hidden="true">
                <path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path>
                </svg>
            </TagElement>
        </div>
    </SidebarGroup>
    <SidebarGroup title="Releases" count="79">
        <a href="#" class="flex items-start mt-4 group">
            <svg class="fill-current mt-1 w-4 text-green-500 group-hover:text-blue-500" mt="1" classes="flex-shrink-0" color="green" viewBox="0 0 16 16" aria-hidden="true">
                <path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path>
            </svg>
            <div class="ml-2">
                <span class="font-semibold group-hover:text-blue-600">v1.5.1</span>
                <span class="ml-1 text-sx text-green-600 border border-green-600 rounded-2xl px-2 group-hover:text-blue-600 group-hover:border-blue-600">Latest</span>
                <span class="block text-xs group-hover:text-blue-600 whitespace-nowrap">6 days ago</span>
            </div>
        </a>
        <div class="mt-6">
            <a href="#" class="text-blue-500 hover:underline text-sm">+ 78 releases</a>
        </div>
    </SidebarGroup>
    <SidebarGroup title="Used By" count="5,000+">
        <div class="mt-4 flex items-center -space-x-2">
            <a href="#"><img class="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/32?img=1" alt="avatar" /></a>
            <a href="#"><img class="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/32?img=2" alt="avatar" /></a>
            <a href="#"><img class="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/32?img=3" alt="avatar" /></a>
            <a href="#"><img class="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/32?img=4" alt="avatar" /></a>
            <a href="#"><img class="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/32?img=5" alt="avatar" /></a>
            <a href="#"><img class="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/32?img=6" alt="avatar" /></a>
            <a href="#"><img class="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/32?img=7" alt="avatar" /></a>
            <a href="#"><img class="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/32?img=8" alt="avatar" /></a>
            <span 
                class="text-xs text-blue-600 font-semibold hover:underline whitespace-nowrap" 
                style="margin-left: 0.5rem;"
            >+ 58,357</span>
        </div>
    </SidebarGroup>
    <SidebarGroup title="Contributors" count="115">
        <!-- TODO: contributors -->
    </SidebarGroup>
    <SidebarGroup title="Languages">
        <!-- TODO: languages -->
    </SidebarGroup>
</template>