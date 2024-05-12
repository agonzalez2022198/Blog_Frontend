import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/blog/blog',
    timeout: 5000
});

apiClient.interceptors.request.use(
    (config) =>{
        const blogDetails = localStorage.getItem('blogs')

        if(blogDetails){ // Corrección: Cambia userDetails por blogDetails
            const token =  JSON.parse(blogDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) =>{
        return Promise.reject(error)
    }
);


export const getBlogs = async () => {
    try {
        return await apiClient.get("/blogs");
    } catch (error) {

        return{
            error: true,
            error
        }
        
    }
}
