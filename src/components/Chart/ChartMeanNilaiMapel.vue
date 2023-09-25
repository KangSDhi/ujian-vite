<script>
import Chart from 'chart.js/auto';

export default {
  name: "ChartMeanNilaiMapel",
  data(){
    return {}
  },
  mounted() {
    this.chart();
  },
  methods: {
    chart(){
      const labels = [
          'Matematika',
          'Bahasa Indonesia',
          'Bahasa Inggris',
          'Kewirausahaan',
          'Mapel TKJ',
      ];

      const data = {
        labels: labels,
        datasets: [
          {
            data: [54.5, 67.9, 30.4, 96.9, 75.6],
            backgroundColor: [
              'rgba(33, 186, 213, 0.2)',
              'rgba(213, 213, 33, 0.2)',
              'rgba(255, 0, 0, 0.2)',
              'rgba(213, 71, 33, 0.2)',
              'rgba(33, 213, 41, 0.2)'

            ]
          }
        ],
      }

      const config = {
        type: 'polarArea',
        data: data,
        options: {

        },
      }

      const chart = new Chart(
          document.getElementById('chartMeanNilaiMapel'),
          config
      )
    }
  }
}
</script>

<template>
  <div class="relative m-auto w-1/2 h-auto">
    <canvas id="chartMeanNilaiMapel" class="h-full w-full"></canvas>
  </div>
</template>

<style scoped>

</style>