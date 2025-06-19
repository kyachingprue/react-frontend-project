import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostDetails from '../PostDetails/PostDetails';

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h2 className='text-center font-bold text-3xl py-5'>All Post: {posts.length}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-3 md:m-10 gap-4 '>
        {
          posts.map(post => <PostDetails key={post.id} post={post}></PostDetails>)
        }
      </div>
    </div>
  );
};

export default Posts;