import { useState } from "react";
import { addComments } from "../../services/api.jsx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useAddcomments = () => {
    const [comments, setComments] = useState(false);
    const [commentsDetail, setCommentsDetail] = useState(null); // Define commentsDetail

    const navigate = useNavigate();

    const comment2 = async(author, content) => {
        setComments(true)

        const response = await addComments({
            author, content
        });

        setComments(false)
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Have a error to add comment'
            )
        }

        const { commentsDetail } = response.data;
        setCommentsDetail(commentsDetail); // Guarda commentsDetail en el estado local

        localStorage.setItem('comments', JSON.stringify(commentsDetail))

        navigate('/')
    } 

    return {
        comment2, // Devuelve comment2
        commentsDetail // Devuelve commentsDetail
    }
}
