import { NavLink } from 'react-router-dom';
import style from './Home.module.scss'
import { Button } from 'antd';
import { css } from "@emotion/css";
import { forwardRef, memo, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { ThemeContext } from '../../App';

interface HomePageProp{
  id: number;
  name: string;
  onClickBtn: (name:string) => void;
}

const buttonStyle = css`
  width: 100%;
`
const HomePage = memo(forwardRef((prop: HomePageProp, ref: any) => {
  const button = useRef(null);
  const MemoTestRef = useRef(null);
  const theme = useContext(ThemeContext);
  const [value, setValue] = useState('')
  const [name, setName] = useState('');
  const onSubmit = useCallback(() => {
    // submit code
  }, []);
  const ids = useMemo(() => {
    console.log('useMemo');
    return [2,3,4,5, prop.id];
  }, [prop.id])
  console.log('MemoTestRef', MemoTestRef);
  
  return (
    <div ref={ref} className={`${style.Home} ${theme}`} bg="#ccc3 hover:blue">
      <NavLink to='/'>
        <Button ref={button} className={buttonStyle} onClick={() => prop.onClickBtn('我的问卷')}>我的问卷</Button>
      </NavLink>
      <NavLink to='/create'>
        <Button className={buttonStyle} onClick={() => prop.onClickBtn('创建问卷')}>创建问卷</Button>
      </NavLink>
      <input type="text" placeholder='MemoTest not update' value={value} onChange={e => setValue(e.target.value)} />
      <input type="text" placeholder='MemoTest will update' value={name} onChange={e => setName(e.target.value)} />
      <MemoTest ref={MemoTestRef} name={name}></MemoTest>
      <UseCallbackTest onSubmit={onSubmit}></UseCallbackTest>
      {ids.map(item => (<div key={item}>{item}</div>))}
    </div>
  );
}));

const MemoTest = memo(forwardRef(({name}: {name: string}, ref: any) => {
  console.log('MemoTest inited');
  
  return (
    <div ref={ref}>MemoTest: {name}</div>
  )
}))
const UseCallbackTest = memo(({onSubmit}: {onSubmit: () => void}) => {
  console.log('UseCallbackTest inited');
  onSubmit();
  return (
    <div>UseCallbackTest</div>
  )
})
export default HomePage;