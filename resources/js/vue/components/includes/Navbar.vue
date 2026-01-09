<template>
    <nav
        class="bg-white fixed w-full z-30 top-0 left-0 border-b border-gray-200"
    >
        <div
            class="max-w-full flex flex-wrap items-center justify-between mx-auto p-4 pl-72 pr-6"
        >
            <form class="flex items-center max-w-sm mx-auto gap-2">
                <div class="relative w-full">
                    <span
                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none"
                    >
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>

                    <input
                        type="text"
                        id="simple-search"
                        class="w-full px-3 py-2.5 pl-9 text-sm border border-gray-300 rounded-full focus:border-blue-500 focus:outline-none placeholder-gray-400"
                        placeholder="Search something..."
                    />
                </div>
            </form>

            <div class="flex items-center gap-3">
                <a href="" class="relative p-2">
                    <i
                        class="fa-solid fa-cart-shopping text-xl text-gray-700"
                    ></i>
                    <div
                        class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2"
                    >
                        20
                    </div>
                </a>

                <button
                    type="button"
                    id="user-menu-button"
                    class="flex items-center gap-3 px-3 py-1.5 rounded-full hover:bg-gray-50 transition-all"
                    aria-expanded="false"
                >
                    <img
                        src="../../assets/me.jpg"
                        alt="User photo"
                        class="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500 ring-offset-2 ring-offset-white"
                    />

                    <div
                        class="hidden sm:flex flex-col text-left leading-tight"
                    >
                        <span class="text-sm font-semibold text-gray-900">
                            Ehao Inn
                        </span>
                        <span class="text-xs text-gray-600"> Admin </span>
                    </div>
                </button>
            </div>
        </div>
    </nav>
</template>
