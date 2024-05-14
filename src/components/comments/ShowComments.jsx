import React, { useEffect } from 'react';
import { useComments } from '../../shared/hooks/useGetComments.jsx';
import "../../pages/dashboard/dashboardPage.css";

export const CommentsList = () => {
    const { getCom, isFetching, allComments } = useComments();

    console.log(allComments)

    useEffect(() => {
        getCom();
    }, []);

    return (
        <div className="comments-container">
            <h2>Comentarios</h2>
            {isFetching ? (
                <p>Cargando comentarios...</p>
            ) : (
                <ul className="comments-list">
                    {allComments.map((comment, index) => (
                        <li key={index} className="comment-item">
                            <span className="comment-author">{comment.author}</span>: 
                            <span className="comment-content">{comment.content}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CommentsList;
