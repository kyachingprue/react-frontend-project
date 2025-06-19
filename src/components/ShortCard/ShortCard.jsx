import { FaMapLocation } from "react-icons/fa6";
import { GiMountains } from "react-icons/gi";
import { SiModx } from "react-icons/si";
import { TbWorldPin } from "react-icons/tb";


const ShortCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 mb-10 gap-5 mx-5">
      <div className="text-center shadow-2xl shadow-blue-500 rounded-xl my-5">
        <TbWorldPin className="text-8xl mx-auto my-5 text-blue-400" />
        <h3 className="text-2xl md:text-4xl font-bold py-3">500</h3>
        <h4 className="text-xl md:text-2xl text-gray-800 pb-5">Awesome Tour</h4>
      </div>
      <div className="text-center shadow-2xl shadow-blue-500 rounded-xl my-5">
        <FaMapLocation className="text-8xl mx-auto my-5 text-blue-400" />
        <h3 className="text-2xl md:text-4xl font-bold py-3">300</h3>
        <h4 className="text-xl md:text-2xl text-gray-800 pb-5">New Destinations</h4>
      </div>
      <div className="text-center shadow-2xl shadow-blue-500 rounded-xl my-5">
        <SiModx className="text-8xl mx-auto my-5 text-blue-400" />
        <h3 className="text-2xl md:text-4xl font-bold py-3">10</h3>
        <h4 className="text-xl md:text-2xl text-gray-800 pb-5">Year Experience</h4>
      </div>
      <div className="text-center shadow-2xl shadow-blue-500 rounded-xl my-5">
        <GiMountains className="text-8xl mx-auto my-5 text-blue-400" />
        <h3 className="text-2xl md:text-4xl font-bold py-3">150</h3>
        <h4 className="text-xl md:text-2xl text-gray-800 pb-5">Best Mountains</h4>
      </div>
    </div>
  );
};

export default ShortCard;