import http from "./AxiosHttp";

const get = (id) => {
    return http.get(`/khach/detail/${id}`);
}

const KhachApi = {
    get
}

export default KhachApi;