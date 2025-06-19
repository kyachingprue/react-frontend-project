import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
  const users = useLoaderData();
  return (
    <div className='mt-12 md:mt-24 mb-10 mx-5 md:mb-14'>
      <h2 className='text-3xl font-bold text-center py-5'>All Users Data: {users.length}</h2>
      <div className='text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {
          users.map(user => <User user={user} key={user.id}></User>)
        }
      </div>
    </div>
  );
};

export default Users;