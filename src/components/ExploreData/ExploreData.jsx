import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const ExploreData = ({ explore }) => {
  const { continent, country, description, name, image, id } = explore;
  return (
    <div>
      <div className="card bg-base-100 md:w-96 mx-4 shadow-2xl my-3">
        <figure>
          <img className='w-full h-60 p-2 rounded-xl'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-black">{name}</h2>
          <h2 className="text-xl font-bold flex items-center gap-2 text-gray-500"><CiLocationOn />{country}</h2>
          <p>{description}</p>
          <p className='text-xl font-semibold'>{continent}</p>
          <div className="card-actions justify-center">
            <Link to={`/explore/${id}`}>
              <button className="btn btn-accent md:text-xl my-4 font-bold text-black">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreData;