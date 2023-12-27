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
            return error.response;
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
            return error.response;
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
            return error.response;
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
            return error.response;
        }
    );

    return instance.post(url, payload);
};
export { axiosPost, axiosGet, axiosSitasiGet, axiosSitasiPost };