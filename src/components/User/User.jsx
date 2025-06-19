import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
  const { id, name, email, username } = user;
  return (
    <div className='text-center p-3 border border-black shadow-2xl shadow-blue-500 rounded-xl'>
      <h2 className='text-2xl font-bold py-3'>{id}</h2>
      <p className='py-2'>{name}</p>
      <p className='py-2'>{email}</p>
      <p className='py-2'>{username}</p>
      <Link to={`/users/${id}`} className='btn btn-accent my-4'>User Details</Link>
    </div>
  );
};

export default User;