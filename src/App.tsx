import { HashRouter, Route, Routes } from 'react-router-dom';
import { AppClassName } from './App.style';
import HomePage from './page/home/Home';
import CreatePage from './page/create/Create';
import { createContext, useMemo, useRef, useState } from 'react';
import { debounce } from "lodash";
export const ThemeContext = createContext('#fff');

const AppPage: React.FC = () => {
  const handleName = useMemo(() => debounce((name: string) => {
    console.log('点击了', name);
  }, 300), []);
  const homeComp = useRef(null);
  const [name, setName] = useState('');

  console.log('homeComp', homeComp);
  
  return (
    <ThemeContext.Provider value='#ccc3'>
      <div className={AppClassName}>
      <input type="text" placeholder='MemoTest will update' value={name} onChange={e => setName(e.target.value)} />
        <HashRouter>
          <Routes>
            <Route path='/' element={<HomePage name="hello" id={1} ref={homeComp} onClickBtn={handleName}></HomePage>}></Route>
            <Route path='/create' element={<CreatePage></CreatePage>}></Route>
            {/* <Route path='/my-questionnaire' element={<Home></Home>}></Route> */}
          </Routes>
        </HashRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default AppPage;
