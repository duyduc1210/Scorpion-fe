import http from "./AxiosHttp";

const registerGuest = (data) => {
    return http.post("/khach/add", data)
}

const registerApi = {
    registerGuest
}

export default registerApi;