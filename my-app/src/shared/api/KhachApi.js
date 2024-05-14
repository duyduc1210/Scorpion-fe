import http from "./AxiosHttp";

const get = (id) => {
    return http.get(`/staff/khach-dat/detail/${id}`);
}

const KhachApi = {
    get
}

export default KhachApi;