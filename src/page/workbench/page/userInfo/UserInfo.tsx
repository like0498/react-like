import DropList, { moveItemInArray } from "@/component/DropList";
import { useCallback, useMemo, useState } from "react";

const UserInfoPage = () => {
  const [data] = useState([
    {
      name: 'red',
      color: 'bg-red'
    },{
      name: 'orange',
      color: 'bg-orange'
    },{
      name: 'yellow',
      color: 'bg-yellow'
    },{
      name: 'green',
      color: 'bg-green'
    },{
      name: 'blue',
      color: 'bg-blue'
    },{
      name: 'cyan',
      color: 'bg-cyan'
    },{
      name: 'purple',
      color: 'bg-purple'
    },
  ]);

  const cachedData = useMemo(() => data.map((item, i) => (
    <div key={i} className={`${item.color} font-bold text-20px text-center p-10px cursor-move`}>{item.name}</div>
  )), [data]);

  const cachedMoveItem = useCallback((pre, cur) => {
    moveItemInArray(data, pre, cur);
  }, [data]);

  return (
    <DropList items={cachedData} onEnd={cachedMoveItem}></DropList>
  )
 }

 export default UserInfoPage;