import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Post = () => {
  const post = useLoaderData();
  const { id, body, title } = post;
  return (
    <div className='text-center border border-black rounded-xl m-10 p-10'>
      <h3 className='text-4xl font-bold py-2'>{id}</h3>
      <p className='py-2'>{body}</p>
      <p className='py-2'>{title}</p>
      <Link to="/posts" className='btn btn-accent my-6'>Back</Link>
    </div>
  );
};

export default Post;