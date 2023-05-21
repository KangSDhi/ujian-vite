<template>
    <BaseLayout>
        <template #content>
            <div class="relative mb-12 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <img
                alt="nature"
                class="h-[32rem] w-full object-cover object-center"
                src="../../../public/img/assets-cbt.jpg"
                />
            </div>
            <h2 class="mb-2 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
                Selamat Datang Di Aplikasi Ujian
            </h2>
            <p class="block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam amet debitis explicabo consequatur molestias autem esse porro ad perspiciatis sequi vel distinctio, enim saepe sunt ducimus! Provident enim dignissimos hic.
            </p>
        </template>
    </BaseLayout>
</template>


<script>
import BaseLayout from "../landing/layouts/BaseLayout.vue";

export default {
    components: {
        BaseLayout
    }
}
</script>