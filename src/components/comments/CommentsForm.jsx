import React, { useState } from 'react';
import { useAddcomments } from '../../shared/hooks/useAddComments.jsx';

const CommentForm = () => {
    const { comment2 } = useAddcomments();
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        comment2(author, content);
        setAuthor('');
        setContent('');
    };

    return (
        <div>
            <h2>Agregar Comentario</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="author">Autor:</label><br />
                <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required /><br /><br />

                <label htmlFor="content">Contenido:</label><br />
                <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows="4" cols="50" required /><br /><br />

                <input type="submit" value="Agregar Comentario" />
            </form>
        </div>
    );
};

export default CommentForm;
