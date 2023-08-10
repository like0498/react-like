import { NavLink } from 'react-router-dom';
import style from './Home.module.scss'
import { Button } from 'antd';
import React from 'react';
import { css } from "@emotion/css";

const buttonStyle = css`
  width: 100%;
`

const HomePage: React.FC = () => {
  return (
    <div className={style.Home}>
      <NavLink to='/'>
        <Button className={buttonStyle}>我的问卷</Button>
      </NavLink>
      <NavLink to='/create'>
        <Button className={buttonStyle}>创建问卷</Button>
      </NavLink>
    </div>
  );
}

export default HomePage;