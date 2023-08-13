import React, { ReactNode, memo, useEffect, useRef } from "react";
import Sortable from "sortablejs";

interface DropListParam{
  items: ReactNode[];
  className?: string;
  onEnd?: (pre: number, cur: number) => any
}

const DropList: React.FC<DropListParam> = ({items, className, onEnd}) => {
  const ref = useRef(null);
  useEffect(() => {
    Sortable.create(ref.current, {
      animation: 300,
      forceFallback: true,
      onEnd: function({oldIndex, newIndex}){
        onEnd(oldIndex, newIndex)
      }
    })
  }, [ref]);
  return (
    <div className={className} ref={ref}>{items}</div>
  )
}

export function moveItemInArray(arr: any[], previousIndex: number, currentIndex: number){
  const previous = arr[previousIndex];
  arr.splice(previousIndex, 1);
  arr.splice(currentIndex, 0, previous);
}

export default memo(DropList);