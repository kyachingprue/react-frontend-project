import React from 'react';
import Header from '../Header/Header';
import ShortCard from '../ShortCard/ShortCard';
import Destination from '../Destination/Destination';

const HomeLayout = () => {
  return (
    <div>
      <Header></Header>
      <ShortCard />
      <Destination />
    </div>
  );
};

export default HomeLayout;