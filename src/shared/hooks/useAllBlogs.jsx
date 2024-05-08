import { useState, useEffect } from "react";
import axios from "axios";

export const useBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('/api/blogs');
                setBlogs(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setLoading(false)
            }
        }

        fetchBlogs();

        return () => {
            
        };

    }, [])

    return { blogs, loading };

}