<template>
    <div class="ml-64 mt-16 p-6 bg-gray-50 min-h-screen">
        <!-- Main modal -->
        <div
            class="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50"
        >
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow-lg w-200">
                    <!-- Modal header -->
                    <div
                        class="flex items-center justify-between p-4 border-b border-gray-200"
                    >
                        <h3 class="text-xl font-semibold text-gray-900">
                            {{ $t("form.create_acc") }}
                        </h3>
                        <button
                            type="button"
                            @click="emit('close')"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center transition"
                        >
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>

                    <!-- Modal body -->
                    <form class="py-6">
                        <div
                            class="flex flex-row-reverse items-center justify-evenly"
                        >
                            <div class="">
                                <!-- Image Upload Section -->
                                <div class="mb-6 flex justify-center">
                                    <div class="flex flex-col items-center">
                                        <div class="relative">
                                            <!-- <div
                                                class="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-md"
                                            >
                                                <img
                                                    alt="Preview"
                                                    class="w-full h-full object-cover"
                                                />
                                            </div> -->
                                            <div
                                                class="w-32 h-32 rounded-full bg-gray-100 border-4 border-dashed border-gray-300 flex items-center justify-center"
                                            >
                                                <i
                                                    class="fa-solid fa-user text-4xl text-gray-400"
                                                ></i>
                                            </div>
                                            <label
                                                class="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 cursor-pointer shadow-lg transition"
                                            >
                                                <i
                                                    class="fa-solid fa-camera"
                                                ></i>
                                                <input
                                                    type="file"
                                                    accept=".jpg, .jpeg, .png, image/jpeg, image/png"
                                                    class="hidden"
                                                />
                                            </label>
                                        </div>
                                        <p class="mt-2 text-sm text-gray-500">
                                            {{ $t("form.choose_img") }}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="">
                                <!-- Form Fields -->
                                <div class="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label
                                            for="name"
                                            class="block mb-2 text-sm font-medium text-gray-700"
                                        >
                                            {{ $t("form.name") }}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 transition focus:outline-none focus:ring-0"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            for="email"
                                            class="block mb-2 text-sm font-medium text-gray-700"
                                        >
                                            {{ $t("form.email") }}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 transition focus:outline-none focus:ring-0"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div class="mb-4">
                                    <label
                                        for="phone"
                                        class="block mb-2 text-sm font-medium text-gray-700"
                                    >
                                        {{ $t("form.phone") }}
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 transition focus:outline-none focus:ring-0"
                                        placeholder="+1 234 567 8900"
                                        required
                                    />
                                </div>

                                <div class="mb-6">
                                    <label
                                        for="address"
                                        class="block mb-2 text-sm font-medium text-gray-700"
                                    >
                                        {{ $t("form.address") }}
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 transition focus:outline-none focus:ring-0"
                                        placeholder="123 Main Street"
                                        required
                                    />
                                </div>

                                <div class="mb-6">
                                    <label
                                        for="level"
                                        class="block mb-2 text-sm font-medium text-gray-700"
                                    >
                                        {{ $t("form.level") }}
                                    </label>
                                    <input
                                        type="text"
                                        id="level"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 transition focus:outline-none focus:ring-0"
                                        placeholder="Admin"
                                        required
                                    />
                                </div>

                                <!-- Account Status Radio Buttons -->
                                <div class="mb-6">
                                    <label
                                        class="block mb-3 text-sm font-medium text-gray-700"
                                    >
                                        {{ $t("form.status") }}
                                    </label>
                                    <div class="flex gap-6">
                                        <div class="flex items-center">
                                            <input
                                                id="status-active"
                                                type="radio"
                                                name="status"
                                                value="true"
                                                checked
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                            />
                                            <label
                                                for="status-active"
                                                class="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
                                            >
                                                {{ $t("form.enable") }}
                                            </label>
                                        </div>
                                        <div class="flex items-center">
                                            <input
                                                id="status-inactive"
                                                type="radio"
                                                name="status"
                                                value="inactive"
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                            />
                                            <label
                                                for="status-inactive"
                                                class="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
                                            >
                                                {{ $t("form.disable") }}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div
                        class="flex justify-end items-center border-t border-gray-100 p-3"
                    >
                        <!-- Action Buttons -->
                        <div class="flex gap-3 border-gray-200">
                            <button
                                type="button"
                                @click="emit('close')"
                                class="text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition"
                            >
                                {{ $t("button.cancel") }}
                            </button>
                            <button
                                type="submit"
                                class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition"
                            >
                                {{ $t("button.save") }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    show: Boolean,
});

const emit = defineEmits(["close"]);
</script>
