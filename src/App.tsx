import { HashRouter, Route, Routes } from 'react-router-dom';
import { AppClassName } from './App.style';
import HomePage from './page/home/Home';
import CreatePage from './page/create/Create';

const AppPage: React.FC = () => {
  return (
    <div className={AppClassName}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/create' element={<CreatePage></CreatePage>}></Route>
          {/* <Route path='/my-questionnaire' element={<Home></Home>}></Route> */}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default AppPage;
