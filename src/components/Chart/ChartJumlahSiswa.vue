<script>
import Chart from 'chart.js/auto';

export default {
  name: "ChartJumlahSiswa",
  data() {
    return {}
  },
  mounted() {
    this.chart();
  },
  methods: {
    chart() {
      const labels = [
        'Laki-laki',
        'Perempuan'
      ];

      const data = {
        labels: labels,
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: [
              'rgba(33, 186, 213, 0.2)',
              'rgba(213, 213, 33, 0.2)',
            ],
            data: [3000, 750],
            hoverOffset: 14,
          },
        ]
      };

      const config = {
        type: 'pie',
        data: data,
        options: {
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
          responsive: true
        }
      };

      new Chart(
          document.getElementById('myChart'),
          config
      )

    }
  }
}
</script>

<template>
  <div class="relative m-auto w-1/2 h-auto">
    <canvas id="myChart" class="h-full w-full"></canvas>
  </div>
</template>

<style scoped>

</style>