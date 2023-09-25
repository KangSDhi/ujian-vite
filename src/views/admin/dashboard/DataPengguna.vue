<template>
  <BaseLayout v-bind:data-from-content="dataForParent">
    <template #content>
      <p>Data Pengguna</p>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./layouts/BaseLayout.vue";

export default {
  components: {
    BaseLayout
  },
  data() {
    return {
      dataForParent: {
        sidebar: 'dataPengguna'
      }
    }
  }
}
</script>