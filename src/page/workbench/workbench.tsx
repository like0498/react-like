import { Layout, Menu } from 'antd';
import { ItemType } from "antd/es/menu/hooks/useItems";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const { Sider, Content } = Layout;
const items: ItemType[] = [
  {
    key: '/workbench/userInfo',
    label: '用户信息管理',
  },
  {
    key: '/workbench/roleAuth',
    label: '角色权限配置',
  },
  {
    key: '/workbench/logMrg',
    label: '日志管理',
  },
];

const WorkbenchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Layout className='h-full gap-20px'>
      <Sider className="w-250px">
        <Menu selectedKeys={[location.pathname]} items={items} mode="inline" className="h-full" onSelect={e => navigate(e.key)}></Menu>
      </Sider>
      <Content>
        <Outlet></Outlet>
      </Content>
    </Layout>
  )
}

export default WorkbenchPage