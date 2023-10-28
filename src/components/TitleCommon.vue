<template>
    <div class="flex flex-col justify-center items-center gap-2">
        <p class="font-bold text-gray-600">{{ props.subTitle }}</p>
        <h1 class="text-5xl font-extrabold text-gray-900">{{ props.title }}</h1>
    </div>
</template>

<script setup>
    const props = defineProps(["title", "subTitle"])
</script>