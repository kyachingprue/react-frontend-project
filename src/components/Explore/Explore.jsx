import React, { useEffect, useState } from 'react';
import ExploreData from '../ExploreData/ExploreData';

const Explore = () => {
  const [exploreData, setExploreData] = useState([]);
  console.log(typeof exploreData)

  useEffect(() => {
    fetch('jsonData.json')
      .then(res => res.json())
      .then(data => setExploreData(data))
  }, [])
  return (
    <div className='mt-24 mb-10 mx-4 md:mx-10'>
      <h3 className='text-center text-3xl font-bold py-4'>All Travel Data:- {exploreData.length}</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto '>
        {
          exploreData.map((explore) => <ExploreData explore={explore} key={explore.id}></ExploreData>)
        }
      </div>
    </div>
  );
};

export default Explore;