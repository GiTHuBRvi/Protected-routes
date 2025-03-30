import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Profile } from "./Components/Profile/Profile";
import { Resource } from "./Components/Resources/Resource";
import { About } from "./Components/About/About";
import { Notfound } from "./Components/Notfound/Notfound";
import { Navbar } from "./Components/Navbar/Navbar";
import { ProtectedRouter } from "./Components/ProtectedRouter/ProtectedRouter";
import { Login } from "./Components/Login/Login";
import Signin from "./Components/SignIN/Signin";
function App() {
  const route = createBrowserRouter([
    {
      path: "/home",
      element: (
        <ProtectedRouter>
          <Navbar />
          <Home />
        </ProtectedRouter>
      ),
      errorElement: <Notfound />,
    },
    {
      path: "/profile",
      element: (
        <ProtectedRouter>
          <Navbar />
          <Profile />
        </ProtectedRouter>
      ),
    },
    {
      path: "/resource",
      element: (
        <ProtectedRouter>
          <Navbar />
          <Resource />
        </ProtectedRouter>
      ),
    },
    {
      path: "/about",
      element: (
        <ProtectedRouter>
          <Navbar />
          <About />
        </ProtectedRouter>
      ),
    },

    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return (
    <>
      {/* protected or public routes */}

      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
