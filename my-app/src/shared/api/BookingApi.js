import http from "./AxiosHttp";

const add = (data) => {
    return http.post("/staff/don-dat/add", data);
}

const BookingApi = {
    add
}

export default BookingApi;
