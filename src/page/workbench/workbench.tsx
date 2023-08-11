import { memo } from "react"
import { Menu } from 'antd';
import { ItemType } from "antd/es/menu/hooks/useItems";
import style from "./workbench.module.scss";
import { Outlet, useNavigate } from "react-router-dom";

const WorkbenchPage = () => {
  const items: ItemType[] = [
    {
      key: 'userInfo',
      label: '用户信息管理',
    },
    {
      key: 'roleAuth',
      label: '角色权限配置',
    },
    {
      key: 'logMrg',
      label: '日志管理',
    },
  ]
  const navigate = useNavigate();
  function doJump(event){
    navigate(event.key);    
  }
  return (
    <div className='flex gap-20px h-full bg-#eff2f5'>
      <Menu items={items} mode="inline" className="w-250px" onSelect={doJump}></Menu>
      <div className="flex flex-1 flex-col gap-20px">
        <div className={style.panel}>filter</div>
        <div className={`${style.panel} flex-1`}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default memo(WorkbenchPage)