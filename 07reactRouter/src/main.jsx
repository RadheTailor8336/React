import React from 'react' // Import React core library
import ReactDOM from 'react-dom/client' // Import ReactDOM for rendering
import App from './App.jsx' // Import main App component (not used directly here)
import './index.css' // Import global styles
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom' // Import React Router functions
import Layout from './Layout.jsx' // Import Layout component for route nesting
import Home from './components/Home/Home.jsx' // Import Home page component
import About from './components/About/About.jsx' // Import About page component
import Contact from './components/Contact/Contact.jsx' // Import Contact page component
import User from './components/User/User.jsx' // Import User page component
// import Github from './components/Github/Github.jsx' // (Old import, commented out)
import Github,{ githubInfoLoader } from './components/Github/Github.jsx' // Import Github component and its loader

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter( // Create the router instance for the app
  createRoutesFromElements( // Define routes using JSX elements
    <Route path='/' element={<Layout />}> {/* Root route, uses Layout for nested routes */}
      <Route path='' element={<Home />} /> {/* Default route ("/"), renders Home */}
      <Route path='about' element={<About />} /> {/* "/about" route, renders About */}
      <Route path='contact' element={<Contact />} /> {/* "/contact" route, renders Contact */}
      <Route path='user/:userid' element={<User/>} /> {/* "/user/:userid" route, renders User with dynamic userid */}
      <Route
        loader={githubInfoLoader} // Loader fetches data before rendering Github
        path='github' // "/github" route
        element={<Github/>} // Renders Github component
      />
    </Route>
  )
) // End router definition

ReactDOM.createRoot(document.getElementById('root')).render( // Mount React app to the DOM
  <React.StrictMode> {/* Enable React's strict mode for highlighting potential problems */}
    <RouterProvider router={router} /> {/* Provide the router to the app */}
  </React.StrictMode>, // End StrictMode
)