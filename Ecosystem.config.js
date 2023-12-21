module.exports = {
    apps: [
        {
            name: "sitasi-landing",
            exec_mode: "cluster",
            port: 5000,
            instances: "max", // sesuaikan dengan core atau bisa isi max untuk menggunakan semua core
            script: "./.output/server/index.mjs",
        },
    ],
};
