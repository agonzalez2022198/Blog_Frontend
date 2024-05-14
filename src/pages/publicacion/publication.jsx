import React, { useEffect } from 'react';
import { useBlogs } from '../../shared/hooks/useAllBlogs.jsx';
import "./dashboardPage.css";

export const DashboardPage = () => {
  const { getB, allBlogs, isFetching } = useBlogs();

  useEffect(() => {
    getB();
  }, []);

  const handleButtonClick = (id) => {
    console.log(id);
  };

  return (
    <div className="dashboard-container">
      <h1>All Blogs</h1>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul className="blog-list">
            {Array.isArray(allBlogs) && allBlogs.map(blog => (
              <li key={blog._id} className="blog-item">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-author">Author: {blog.author}</p>
                <p className="blog-content">{blog.content}</p>
                <img className="blog-image" src={blog.image} alt={blog.title} />
                <button onClick={() => handleButtonClick(blog._id)}>Agregar comentario</button>
              </li>
            ))}
          </ul>
          {/* Agrega el componente CommentForm aquí */}
          <CommentForm />
          {/* Agrega el componente CommentsList aquí */}
          <CommentsList />
        </div>
      )}
    </div>
  );
};
