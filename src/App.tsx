import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import NotFoundPage from "./component/NotFound";
import workbenchRoute from "./page/workbench/route";

const routes = createHashRouter([
  {
    path: '/',
    element: <Navigate to='/workbench/userInfo'></Navigate>,
  },
  workbenchRoute,
  {
    path: '*',
    element: <NotFoundPage></NotFoundPage>,
  }
]);

const AppPage: React.FC = () => {
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default AppPage;
