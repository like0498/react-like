import DropList, { moveItemInArray } from "@/component/DropList";
import { useCallback, useMemo, useState } from "react";

const UserInfoPage = () => {
  const [data] = useState([
    {
      name: 'like',
      color: 'bg-red'
    },{
      name: 'nase',
      color: 'bg-orange'
    },{
      name: 'quews',
      color: 'bg-yellow'
    },{
      name: 'green',
      color: 'bg-green'
    },{
      name: 'blue',
      color: 'bg-blue'
    },
  ]);

  const cachedData = useMemo(() => data.map((item, i) => (
    <div key={i} className={`${item.color} font-bold text-20px text-center p-10px cursor-move`}>{item.name}</div>
  )), [data]);

  const moveItem = useCallback((pre, cur) => {
    moveItemInArray(data, pre, cur);
  }, [data])
  return (
    <DropList items={cachedData} onEnd={moveItem}></DropList>
  )
 }

 export default UserInfoPage;