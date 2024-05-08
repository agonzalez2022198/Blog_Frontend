import React from 'react';
import useBlogs from '../../shared/hooks/useAllBlogs.jsx';

const DashboardPage = () => {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>All Blogs</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id}>
            <h2>{blog.title}</h2>
            <p>Author: {blog.author}</p>
            <p>{blog.content}</p>
            <img src={blog.image} alt={blog.title} />
            {}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;