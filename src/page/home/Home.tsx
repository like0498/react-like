import { NavLink } from 'react-router-dom';
import style from './Home.module.scss'
import { Button } from 'antd';
import { css } from "@emotion/css";
import React, { forwardRef, memo, useContext, useRef } from 'react';
import { ThemeContext } from '../../App';

interface HomePageProp{
  id: number;
  name: string;
  onClickBtn: (name:string) => void;
}

const buttonStyle = css`
  width: 100%;
`
const HomePage: React.ForwardRefRenderFunction<any, HomePageProp> = (prop, ref) => {
  const button = useRef(null);
  const theme = useContext(ThemeContext);

  return (
    <div ref={ref} className={style.Home}>
      {theme}
      <NavLink to='/'>
        <Button ref={button} className={buttonStyle} onClick={() => prop.onClickBtn('我的问卷')}>我的问卷</Button>
      </NavLink>
      <NavLink to='/create'>
        <Button className={buttonStyle} onClick={() => prop.onClickBtn('创建问卷')}>创建问卷</Button>
      </NavLink>
    </div>
  );
}
export default memo(forwardRef(HomePage));