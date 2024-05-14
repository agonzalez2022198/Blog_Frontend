import { useState } from "react";
import { getComments } from "../../services/api.jsx";

export const useComments = () => {
    const [comments, setComments] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const getCom = async () => {
        setIsFetching(true);
        try {
            const datesComments = await getComments();
            console.log(datesComments.data);

            if (datesComments.error) {
                // Maneja el error
            } else {
                setComments(datesComments.data.comments);
            }
        } catch (error) {
            // Maneja el error
        } finally {
            setIsFetching(false);
        }
    };

    return {
        getCom,
        isFetching,
        allComments: comments,
    };
};