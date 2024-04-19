import http from "./AxiosHttp";

const get = (id) => {
    return http.get(`/staff/don-dat/theo-khach/${id}`);
}

const historyBook = {
    get
}

export default historyBook;