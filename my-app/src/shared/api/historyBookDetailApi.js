import http from "./AxiosHttp";

const get = (id) => {
    return http.get(`/staff/don-dat/thong-tin-phong-dat/${id}`);
}

const historyBookDetail = {
    get
}

export default historyBookDetail;