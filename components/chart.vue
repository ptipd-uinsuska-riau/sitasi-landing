<!-- YourChartComponent.vue -->
<template>
    <div id="chart"></div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            chartOptions: {
                series: [{
                    data: [21, 22, 10, 28, 16, 21, 13, 30],
                }],
                chart: {
                    height: 350,
                    type: 'bar',
                    events: {
                        click: function (chart, w, e) {
                            // console.log(chart, w, e)
                        },
                    },
                },
                colors: colors, // Pastikan Anda mendefinisikan variabel colors di tempat yang sesuai
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    show: false,
                },
                xaxis: {
                    categories: [
                        ['John', 'Doe'],
                        ['Joe', 'Smith'],
                        ['Jake', 'Williams'],
                        'Amber',
                        ['Peter', 'Brown'],
                        ['Mary', 'Evans'],
                        ['David', 'Wilson'],
                        ['Lily', 'Roberts'],
                    ],
                    labels: {
                        style: {
                            colors: colors,
                            fontSize: '12px',
                        },
                    },
                },
            },
        };
    },
    mounted() {
        // Render chart when the component is mounted
        this.renderChart();
    },
    methods: {
        renderChart() {
            const chart = new ApexCharts(this.$el.querySelector("#chart"), this.chartOptions);
            chart.render();
        },
    },
};
</script>
