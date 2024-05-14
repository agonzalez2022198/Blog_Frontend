import { useState } from "react";
import { getBlogById } from "../../services/api.jsx";

export const useComments = () => {
    const [blog, setBlogs] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const getBlogId = async () => {
        setIsFetching(true);
        try {
            const datesBlog = await getBlogById(id);
            console.log(datesComments.data);

            if (datesComments.error) {

            } else {
                setBlogs(datesBlog.data.blog);
            }
        } catch (error) {

        } finally {
            setIsFetching(false);
        }
    };

    return {
        getBlogId,
        isFetching,
        allBlogs: blog
        ,
    };
};