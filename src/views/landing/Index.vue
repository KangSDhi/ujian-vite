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
            <h2 class="font-sans text-4xl font-semibold mb-2 leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
                Selamat Datang Di Aplikasi Ujian
            </h2>
            <p class="font-sans text-base leading-relaxed text-gray-700 antialiased">
                Aplikasi Ujian Berbasis Web Base Sehingga Ujian Dapat Dilakukan Kapan dan Darimana Saja.
            </p>
        </template>
    </BaseLayout>
</template>


<script>
import BaseLayout from "./layouts/BaseLayout.vue";

export default {
    components: {
        BaseLayout
    }
}
</script>