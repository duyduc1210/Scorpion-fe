import http from "./AxiosHttp";

const loginGuest = data => {
    return http.post("/khach/login", data)
}

const apiRequest = {
    loginGuest
}

export default apiRequest;