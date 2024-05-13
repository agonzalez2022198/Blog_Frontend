import React, { useEffect } from 'react';
import { useBlogs } from '../../shared/hooks/useAllBlogs.jsx';
import CommentForm from '../../components/comments/CommentsForm.jsx'; // Importa el componente CommentForm

export const DashboardPage = () => {
  const { getB, allBlogs, isFetching } = useBlogs();

  useEffect(() => {
    getB();
  }, []);

  return (
    <div>
      <h1>All Blogs</h1>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            {Array.isArray(allBlogs) && allBlogs.map(blog => (
              <li key={blog._id}>
                <h2>{blog.title}</h2>
                <p>Author: {blog.author}</p>
                <p>{blog.content}</p>
                <img src={blog.image} alt={blog.title} />
              </li>
            ))}
          </ul>
          {/* Agrega el componente CommentForm aquí */}
          <CommentForm />
        </div>
      )}
    </div>
  );
};
