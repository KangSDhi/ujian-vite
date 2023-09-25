<template>
  <BaseLayout v-bind:data-from-content="dataForParent">
    <template #content>
      <p>Data Soal</p>
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
        sidebar: 'dataSoal'
      }
    }
  }
}
</script>