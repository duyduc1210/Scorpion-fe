import http from "./AxiosHttp";

const getAll = () => {
    return http.get("/admin/loai-phong/search")
}

const SearchApi = {
    getAll
}

export default SearchApi;