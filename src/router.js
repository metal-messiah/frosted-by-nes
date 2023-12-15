import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Pricing from "./components/Pricing";
import Resources from "./components/Resources";
import Disclosure from "./components/Disclosure";
import Privacy from "./components/Privacy";
import Care from "./components/Care";

const routes = [
  {path: '', component: <Main />},
  {path: 'about/', component: <About />}, 
  {path: 'pricing/', component: <Pricing />}, 
  {path: 'contact/', component: <Contact />}, 
  {path: 'resources/', component: <Resources />},
  {path: 'disclosure/', component: <Disclosure />}, 
  {path: 'privacy/', component: <Privacy />},
  {path: 'care/', component: <Care />},
  {path: '*', component: <Navigate to="/"/>},
]

const routeMap = routes.map(route => ([
  {path: `/docs/${route.path}`, element: <Layout>{route.component}</Layout>},
  {path: `/${route.path}`, element: <Layout>{route.component}</Layout>},
])).flat()

console.log(routeMap)

export const router = createBrowserRouter(routeMap)

// export const router = createBrowserRouter([
//     {
//       path: "/docs/",
//       element:<Layout><Main /></Layout>,
//     },
//     {
//       path: "/docs/about/",
//       element:<Layout><About /></Layout>,
//     },
//     {
//       path: "/docs/pricing/",
//       element:<Layout><Pricing /></Layout>,
//     },
//     {
//       path: "/docs/contact/",
//       element:<Layout><Contact /></Layout>,
//     },
//     {
//       path: "/",
//       element:<Layout><Main /></Layout>,
//     },
//     {
//       path: "/about/",
//       element:<Layout><About /></Layout>,
//     },
//     {
//       path: "/pricing/",
//       element:<Layout><Pricing /></Layout>,
//     },
//     {
//       path: "/contact/",
//       element:<Layout><Contact /></Layout>,
//     },
//     {
//       path: "/about",
//       element:<Layout><About /></Layout>,
//     },
//     {
//       path: "/pricing",
//       element:<Layout><Pricing /></Layout>,
//     },
//     {
//       path: "/contact",
//       element:<Layout><Contact /></Layout>,
//     },
//     {
//       path: '*',
//       element:<Navigate to="/" />
//     }
//   ]);