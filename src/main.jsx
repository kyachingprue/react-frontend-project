import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Posts from './components/Posts/Posts';
import Users from './components/Users/Users';
import Post from './components/Post/Post';
import UserDetails from './components/UserDetails/UserDetails';
import HomeLayout from './components/HomeLayout/HomeLayout';
import Explore from './components/Explore/Explore';
import ExploreDetails from './components/ExploreDetails/ExploreDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>
      },
      {
        path: '/explore',
        element: <Explore></Explore>
      },
      {
        path: '/explore/:userId',
        element: <ExploreDetails></ExploreDetails>,
        loader: async ({ params }) => {
          const res = await fetch('/jsonData.json');
          const data = await res.json();
          const matched = data.find(item => item.id.toString() === params.userId);
          return matched;
        }
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: '/posts/:postId',
        element: <Post></Post>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/users/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
