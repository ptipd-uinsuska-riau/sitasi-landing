import axios from "axios";

const axiosPost = (url, payload) => {
    // proses ngamanggil variabel dari env
    const config = useRuntimeConfig();
    const defaultURL = config.public.apiURL;
    const apiKEY = config.public.apiKEY;

    const instance = axios.create({
        baseURL: defaultURL,
        headers: {
            common: {
                "Api-Key": apiKEY,
            },
        },
        timeout: 120000,
    });

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            // Handle error here
            if (!error.response) {
                // Kesalahan tanpa respons dari server (API mungkin dimatikan)
                console.error("Tidak dapat terhubung ke server:", error.message);
                // Lakukan penanganan tambahan sesuai kebutuhan, misalnya, tampilkan pesan kesalahan kepada pengguna.
                throw new Error("Tidak dapat terhubung ke server. Silakan coba lagi nanti.");
            }

            // Jika respons dari server diterima, tetapi memiliki status kesalahan
            return Promise.reject(error.response);
        }
    );

    return instance.post(url, payload);
};

const axiosGet = (url) => {
    // proses ngamanggil variabel dari env
    const config = useRuntimeConfig();
    const defaultURL = config.public.apiURL;
    const apiKEY = config.public.apiKEY;

    const instance = axios.create({
        baseURL: defaultURL,
        headers: {
            common: {
                "Api-Key": apiKEY,
            },
        },
        timeout: 120000,
    });

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            // Handle error here
            if (!error.response) {
                // Kesalahan tanpa respons dari server (API mungkin dimatikan)
                console.error("Tidak dapat terhubung ke server:", error.message);
                // Lakukan penanganan tambahan sesuai kebutuhan, misalnya, tampilkan pesan kesalahan kepada pengguna.
                throw new Error("Tidak dapat terhubung ke server. Silakan coba lagi nanti.");
            }

            // Jika respons dari server diterima, tetapi memiliki status kesalahan
            return Promise.reject(error.response);
        }
    );

    return instance.get(url);
}

const axiosSitasiGet = (url) => {
    // proses ngamanggil variabel dari env
    const config = useRuntimeConfig();
    const defaultURL = config.public.apiURLSITASI;
    const apiKEY = config.public.apiKEYSITASI;

    const instance = axios.create({
        baseURL: defaultURL,
        headers: {
            common: {
                "Api-Key": apiKEY,
            },
        },
        timeout: 120000,
    });

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            // Handle error here
            if (!error.response) {
                // Kesalahan tanpa respons dari server (API mungkin dimatikan)
                console.error("Tidak dapat terhubung ke server:", error.message);
                // Lakukan penanganan tambahan sesuai kebutuhan, misalnya, tampilkan pesan kesalahan kepada pengguna.
                throw new Error("Tidak dapat terhubung ke server. Silakan coba lagi nanti.");
            }

            // Jika respons dari server diterima, tetapi memiliki status kesalahan
            return Promise.reject(error.response);
        }
    );

    return instance.get(url);
}

const axiosSitasiPost = (url, payload) => {
    // proses ngamanggil variabel dari env
    const config = useRuntimeConfig();
    const defaultURL = config.public.apiURLSITASI;
    const apiKEY = config.public.apiKEYSITASI;

    const instance = axios.create({
        baseURL: defaultURL,
        headers: {
            common: {
                "Api-Key": apiKEY,
            },
        },
        timeout: 120000,
    });

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            // Handle error here
            if (!error.response) {
                // Kesalahan tanpa respons dari server (API mungkin dimatikan)
                console.error("Tidak dapat terhubung ke server:", error.message);
                // Lakukan penanganan tambahan sesuai kebutuhan, misalnya, tampilkan pesan kesalahan kepada pengguna.
                throw new Error("Tidak dapat terhubung ke server. Silakan coba lagi nanti.");
            }

            // Jika respons dari server diterima, tetapi memiliki status kesalahan
            return Promise.reject(error.response);
        }
    );

    return instance.post(url, payload);
};
export { axiosPost, axiosGet, axiosSitasiGet, axiosSitasiPost };