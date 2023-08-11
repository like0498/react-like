import { Suspense, lazy } from "react";

const WorkbenchPage = lazy(() => import('./workbench'));
const UserInfoPage = lazy(() => import('./page/userInfo/UserInfo'));
const LogMrgPage = lazy(() => import('./page/logMrg/LogMrg'));
const RoleAuthPage = lazy(() => import('./page/roleAuth/RoleAuth'));


const route = {
  path: 'workbench',
  element: <Suspense children={<WorkbenchPage></WorkbenchPage>}></Suspense>,
  children: [
    {
      path: 'userInfo',
      element: <Suspense children={<UserInfoPage></UserInfoPage>}></Suspense>,
    },
    {
      path: 'roleAuth',
      element: <Suspense children={<RoleAuthPage></RoleAuthPage>}></Suspense>,
    },
    {
      path: 'logMrg',
      element: <Suspense children={<LogMrgPage></LogMrgPage>}></Suspense>,
    },
  ]
}

export default route;