import React, { useEffect } from 'react';
import { useBlogs } from '../../shared/hooks/useAllBlogs.jsx';
import CommentForm from '../../components/comments/CommentsForm.jsx';
import {CommentsList} from '../../components/comments/ShowComments.jsx';
import "./dashboardPage.css";

export const DashboardPage = () => {
  const { getB, allBlogs, isFetching } = useBlogs();

  useEffect(() => {
    getB();
  }, []);

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
                <img className="blog-image" src={blog.image} alt="100px" width="160px" height="160px" />
              </li>
            ))}
          </ul>
          {}
          <CommentForm />
          {}
          <CommentsList />
        </div>
      )}
    </div>
  );
};
