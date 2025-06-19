import { Link, useLoaderData } from "react-router-dom";


const ExploreDetails = () => {
  const exploreData = useLoaderData();
  console.log(exploreData);
  const { continent, country, description, name, image } = exploreData;
  return (
    <div className='mt-10 md:mt-24 mx-2 md:mx-20 mb-7 md:mb-16 '>
      <h2 className='text-center text-6xl font-bold'> {exploreData.name} </h2>
      <div className="divider">OR</div>
      <div className="md:flex items-center my-10">
        <div className="flex-1/2">
          <img className="md:w-[540px] md:h-[360px] rounded-xl mx-auto" src={image} alt="travel images" />
        </div>
        <div className="mx-5 text-center pt-5">
          <h2 className="text-3xl md:text-5xl font-bold">{name}</h2>
          <h4 className="text-xl md:text-3xl font-bold py-3"><span className="text-gray-500">Country</span>: {country}</h4>
          <p className="text-gray-600 py-3">{description}</p>
          <h3 className="text-xl md:text-2xl font-bold py-2 md:py-4 pb-4 md:pb-7">{continent}</h3>
          <Link to="/explore" className='btn btn-accent text-black'>Go Back</Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreDetails;