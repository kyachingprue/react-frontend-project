import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import natureImg from '../../assets/nature-image.jpg'

const UserDetails = () => {
  const users = useLoaderData();
  // const { id, name, email, username, phone, website, company, address } = users;
  return (
    <div className='text-center md:flex items-center gap-4 m-10 mt-12 md:mt-24 p-10  rounded-xl shadow-2xl shadow-blue-600'>
      <div className='flex-1/2 mb-4'>
        <img className='rounded-xl' src={natureImg} alt="" />
      </div>
      <div className='flex-1/2'>
        <h2>{users.name} ({users.username})</h2>
        <p>Email: {users.email}</p>
        <p>Phone: {users.phone}</p>
        <p>Website: {users.website}</p>
        <h3>Address:</h3>
        <p>{users.address.street}, {users.address.suite}</p>
        <p>{users.address.city}, {users.address.zipcode}</p>
        <p>Geo: {users.address.geo.lat}, {users.address.geo.lng}</p>
        <h3>Company:</h3>
        <p>Name: {users.company.name}</p>
        <p>CatchPhrase: {users.company.catchPhrase}</p>
        <p>BS: {users.company.bs}</p>
        <Link to="/users"><button className='btn btn-accent my-4'>Go Back</button></Link>
      </div>
    </div>
  );
};

export default UserDetails;