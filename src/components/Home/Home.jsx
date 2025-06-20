
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);;
  return (
    <div>
      <Navbar />
      {
        navigation.state === 'loading' ? <span className="loading loading-bars mx-36 mt-28 loading-xl"></span>
          :
          <Outlet />
      }
      <Footer />
    </div>
  );
};

export default Home;