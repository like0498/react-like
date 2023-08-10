import { HashRouter, Route, Routes } from 'react-router-dom';
import { AppClassName } from './App.style';
import HomePage from './page/home/Home';
import CreatePage from './page/create/Create';
import { createContext, useCallback, useRef } from 'react';
import { debounce } from "lodash";
export const ThemeContext = createContext('blue');

const AppPage: React.FC = () => {
  const handleName = useCallback(debounce((name: string) => {
    console.log('点击了', name);
  }, 300), []);
  const homeComp = useRef(null);

  console.log('homeComp', homeComp);
  
  return (
    <ThemeContext.Provider value='red'>
      <div className={AppClassName}>
        <HashRouter>
          <Routes>
            <Route path='/' element={<HomePage name="我的" id={1} ref={homeComp} onClickBtn={handleName}></HomePage>}></Route>
            <Route path='/create' element={<CreatePage></CreatePage>}></Route>
            {/* <Route path='/my-questionnaire' element={<Home></Home>}></Route> */}
          </Routes>
        </HashRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default AppPage;
