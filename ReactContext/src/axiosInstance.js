const axiosInstance = axios.create=({
    baseURL:'baseUrl',
    timeout:10000,
    headers:{
        'Content-Type':'application/json',
    }
})