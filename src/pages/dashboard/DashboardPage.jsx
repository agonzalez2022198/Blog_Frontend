import React, { useEffect } from 'react';
import { useBlogs } from '../../shared/hooks/useAllBlogs.jsx';

export const DashboardPage = () => {
  const { getB, allBlogs, isFetching } = useBlogs(); // Corrige el nombre de la función

  useEffect(() => {
    getB(); // Llama a la función getB dentro de useEffect
  }, []);

  return (
    <div>
      <h1>All Blogs</h1>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </div>
  );
};