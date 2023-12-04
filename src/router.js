import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Pricing from "./components/Pricing";

export const router = createBrowserRouter([
    {
      path: "/docs/",
      element:<Layout><Main /></Layout>,
    },
    {
      path: "/docs/about/",
      element:<Layout><About /></Layout>,
    },
    {
      path: "/docs/pricing/",
      element:<Layout><Pricing /></Layout>,
    },
    {
      path: "/docs/contact/",
      element:<Layout><Contact /></Layout>,
    },
    {
      path: "/",
      element:<Layout><Main /></Layout>,
    },
    {
      path: "/about/",
      element:<Layout><About /></Layout>,
    },
    {
      path: "/pricing/",
      element:<Layout><Pricing /></Layout>,
    },
    {
      path: "/contact/",
      element:<Layout><Contact /></Layout>,
    },
    {
      path: "/about",
      element:<Layout><About /></Layout>,
    },
    {
      path: "/pricing",
      element:<Layout><Pricing /></Layout>,
    },
    {
      path: "/contact",
      element:<Layout><Contact /></Layout>,
    },
    {
      path: '*',
      element:<Navigate to="/" />
    }
  ]);