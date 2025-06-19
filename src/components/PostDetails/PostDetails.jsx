import React from 'react';
import { Link } from 'react-router-dom';

const PostDetails = ({ post }) => {
  const { id, title } = post;
  return (
    <div className='text-center p-4 border-b-4 shadow-blue-400 shadow-2xl border-gray-700 border rounded-md'>
      <h3 className='text-3xl py-3 font-bold'>ID: {id}</h3>
      <p >{title}</p>
      <div className='m-5'>
        <Link to={`/posts/${id}`} className='btn btn-accent'>Post Details</Link>
      </div>
    </div>
  );
};

export default PostDetails;