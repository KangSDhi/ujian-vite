<template>
    <BaseLayout>
        <template #content>
            <article>
                <h2 class="block mb-2 font-sans text-4xl font-semibold">
                    Tentang Aplikasi Ujian
                </h2>
                <p class="block font-sans text-lg font-normal leading-relaxed text-gray-700 antialiased">
                    Dibangun dengan <span
                        class="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-fuchsia-600">Vitejs</span>
                    dan waktu senggang 🍜.
                </p>
                <img src="../../../public/img/gerak-ih-fotonya.gif"
                    class="h-[32rem] w-full object-center shadow-lg rounded-xl" alt="">
            </article>
        </template>
    </BaseLayout>
</template>

<script>
import BaseLayout from './layouts/BaseLayout.vue';

export default {
    components: {
        BaseLayout
    }
}
</script>