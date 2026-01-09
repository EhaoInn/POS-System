<template>
    <div
        class="ml-64 mt-16 p-6 bg-gray-50 min-h-screen"
        :class="{ 'blur-sm pointer-events-none': showCreateUser }"
    >
        <!-- Header -->
        <div class="mb-6 mt-6">
            <h1 class="text-3xl font-bold text-gray-800">
                {{ $t("sidebar.account") }}
            </h1>
        </div>

        <!-- Table Card -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
            <!-- Toolbar -->
            <div
                class="flex items-center justify-between p-4 border-b border-gray-200"
            >
                <div class="flex items-center gap-3">
                    <div class="relative">
                        <span
                            class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none"
                        >
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input
                            type="text"
                            id="simple-search"
                            class="w-64 px-3 py-2 pl-9 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none placeholder-gray-400 transition"
                            placeholder="Search accounts..."
                        />
                    </div>
                </div>

                <button
                    @click="openCreateUser"
                    class="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition shadow-sm"
                >
                    {{ $t("form.create_acc") }}
                </button>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th
                                scope="col"
                                class="px-5 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                            >
                                {{ $t("form.ID") }}
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                            >
                                {{ $t("form.name") }}
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                            >
                                {{ $t("form.phone") }}
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                            >
                                {{ $t("form.email") }}
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                            >
                                {{ $t("form.address") }}
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                            >
                                {{ $t("form.status") }}
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"
                            >
                                {{ $t("form.action") }}
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr class="hover:bg-gray-50 transition">
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium"
                            >
                                #001
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div
                                        class="shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center"
                                    >
                                        <span>JD</span>
                                    </div>
                                    <div class="ml-3">
                                        <div
                                            class="text-sm font-medium text-gray-900"
                                        ></div>
                                        <div
                                            class="text-xs text-gray-500"
                                        ></div>
                                    </div>
                                </div>
                            </td>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-600"
                            >
                                +1 234 567 8900
                            </td>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-600"
                            >
                                john.doe@example.com
                            </td>
                            <td
                                class="px-6 py-4 text-sm text-gray-600 max-w-xs truncate"
                            >
                                123 Main Street, New York, NY 10001
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span
                                    class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                                >
                                    <span
                                        class="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"
                                    ></span>
                                    Active
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm">
                                <div class="flex items-center gap-2">
                                    <button
                                        class="text-blue-600 hover:text-blue-800 font-medium transition"
                                    >
                                        <i
                                            class="fa-solid fa-pen-to-square"
                                        ></i>
                                    </button>
                                    <button
                                        class="text-gray-600 hover:text-gray-800 font-medium transition"
                                    >
                                        <i class="fa-solid fa-eye"></i>
                                    </button>
                                    <button
                                        class="text-red-600 hover:text-red-800 font-medium transition"
                                    >
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr class="hover:bg-gray-50 transition">
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium"
                            >
                                #002
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div
                                        class="shrink-0 h-10 w-10 bg-pink-100 rounded-full flex items-center justify-center"
                                    >
                                        <span>MB</span>
                                    </div>
                                    <div class="ml-3">
                                        <div
                                            class="text-sm font-medium text-gray-900"
                                        ></div>
                                    </div>
                                </div>
                            </td>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-600"
                            >
                                +1 234 567 8902
                            </td>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-600"
                            >
                                mike.brown@example.com
                            </td>
                            <td
                                class="px-6 py-4 text-sm text-gray-600 max-w-xs truncate"
                            >
                                789 Pine Road, Chicago, IL 60601
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span
                                    class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800"
                                >
                                    <span
                                        class="w-1.5 h-1.5 bg-red-500 rounded-full mr-1.5"
                                    ></span>
                                    Inactive
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm">
                                <div class="flex items-center gap-2">
                                    <button
                                        class="text-blue-600 hover:text-blue-800 font-medium transition"
                                    ></button>
                                    <button
                                        class="text-gray-600 hover:text-gray-800 font-medium transition"
                                    ></button>
                                    <button
                                        class="text-red-600 hover:text-red-800 font-medium transition"
                                    ></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div
                class="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50"
            >
                <div class="text-sm text-gray-600">
                    Showing <span class="font-medium">1</span> to
                    <span class="font-medium">3</span> of
                    <span class="font-medium">3</span> results
                </div>
                <div class="flex gap-2">
                    <button
                        class="px-3 py-1 text-sm border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled
                    >
                        Previous
                    </button>
                    <button
                        class="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg font-medium"
                    >
                        1
                    </button>
                    <button
                        class="px-3 py-1 text-sm border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>

        <!-- UserCreate Modal -->
    </div>
    <UserCreate
        v-if="showCreateUser"
        :show="showCreateUser"
        @close="closeCreateUser"
    />
</template>

<script setup>
import { ref } from "vue";
import UserCreate from "./UserCreate.vue";

const showCreateUser = ref(false);

const openCreateUser = () => {
    showCreateUser.value = true;
};

const closeCreateUser = () => {
    showCreateUser.value = false;
};
</script>
