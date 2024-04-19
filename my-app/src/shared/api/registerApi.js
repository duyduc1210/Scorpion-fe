import http from "./AxiosHttp";

const registerGuest = (data) => {
    return http.post("/khach/sign-up", data)
}

const registerApi = {
    registerGuest
}

export default registerApi;