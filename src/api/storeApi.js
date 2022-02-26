import axiosClient from "./axiosClient";
const storeApi ={
    getNews : (params) => {
        return axiosClient.get(params)
    }
}

export default storeApi;