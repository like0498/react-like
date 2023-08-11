import { RouterProvider, createHashRouter } from 'react-router-dom';
import NotFoundPage from "./component/NotFound";
import workbenchRoute from "./page/workbench/routes";
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react";

const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if(location.pathname === '/'){
      navigate('/workbench');
    }
  }, [location]);
  return(
    <Outlet></Outlet>
  )
}

const AppPage: React.FC = () => {
  const routes = createHashRouter([
    {
      path: '/',
      element: <Root></Root>,
      children: [
        workbenchRoute
      ]
    },
    {
      path: '*',
      element: <NotFoundPage></NotFoundPage>,
    }
  ]);
  
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default AppPage;
