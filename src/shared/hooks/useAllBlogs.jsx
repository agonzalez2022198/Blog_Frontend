import { useState } from "react";
import { getBlogs } from "../../services/api.jsx";

export const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const getB = async () => {
        setIsFetching(true);
        try {
            const datesBlogs = await getBlogs();
            console.log(datesBlogs);
            
            if (datesBlogs.error) {
                // Maneja el error
            } else {
                setBlogs(datesBlogs.data.blogs);
            }
        } catch (error) {
            error: true,
            e
        } finally {
            setIsFetching(false);
        }
    };

    return {
        getB,
        isFetching,
        allBlogs: blogs,
    };
};