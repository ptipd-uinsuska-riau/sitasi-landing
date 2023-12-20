<template>
    <div>
        <ClientOnly>
            <apexchart height="120" width="100%" :options="options" :series="series">
            </apexchart>
        </ClientOnly>
    </div>
</template>

<script setup>
const options = ref({
    chart: {
        type: "bar",
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            borderRadiusApplication: "around",
        },
    },
});
const series = ref([
    {
        name: "Score",
        data: [],
    },
]);
const updateChart = () => {
    //generate array of random numbers of length 10
    const data = Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 100)
    );
    options.value = {
        ...options.value,
        xaxis: {
            labels: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        toolbar: {
            show: false, // Menyembunyikan menu dan tombol
        },
        zoom: {
            enabled: false, // Menyembunyikan tombol zoom
        },
    };
    series.value = [
        {
            data: data,
        },
    ];
};
onMounted(() => {
    updateChart();
    // Menyembunyikan toolbar dengan menggunakan CSS
    const style = document.createElement('style');
    style.textContent = '.apexcharts-toolbar { display: none !important; }';
    document.head.appendChild(style);
});
</script>
