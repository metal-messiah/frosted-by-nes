import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Pricing from "./components/Pricing";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout><Main /></Layout>,
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
  ]);