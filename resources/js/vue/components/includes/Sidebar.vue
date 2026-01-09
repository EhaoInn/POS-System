<template>
    <aside
        class="fixed top-0 left-0 z-40 w-64 h-screen bg-white border-r border-gray-200"
        aria-label="Sidebar"
    >
        <div class="h-full px-4 py-6 flex flex-col">
            <!-- Logo -->
            <div class="mb-10 text-center">
                <h1 class="text-2xl font-bold text-blue-600">NPIC Mart</h1>
                <p class="text-md text-gray-400">{{ $t("sidebar.title") }}</p>
            </div>

            <!-- Menu -->
            <ul class="space-y-2 font-medium text-gray-700">
                <li>
                    <a
                        href="/dashboard"
                        class="flex items-center gap-3 px-4 py-2 rounded-lg transition-all active hover:bg-blue-50 hover:text-blue-600 active:bg-blue-500 active:text-white"
                    >
                        <i class="fa-solid fa-gauge"></i>
                        <span>{{ $t("sidebar.dashboard") }}</span>
                    </a>
                </li>

                <li>
                    <a
                        href="/products"
                        class="flex items-center gap-3 px-4 py-2 rounded-lg transition-all active hover:bg-blue-50 hover:text-blue-600 active:bg-blue-500 active:text-white"
                    >
                        <i class="fa-solid fa-box"></i>
                        <span>{{ $t("sidebar.product") }}</span>
                    </a>
                </li>
            </ul>

            <!-- Footer -->
            <div class="mt-auto text-center text-sm text-gray-400">
                © 2026 POS System
            </div>
        </div>
    </aside>
</template>
