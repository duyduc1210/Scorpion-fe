import http from "./AxiosHttp";

const getAll = () => {
    return http.get("/admin/loai-phong/all")
}



const RoomApi = {
    getAll
}

export default RoomApi;