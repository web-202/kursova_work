import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import First from './components/first';
import Sizm from './components/sizm';
import Slava from './components/slava';
import News from './components/news';
import Loyauts from './pages/loyauts.jsx';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/' element={<First />} />
        <Route path='/support' element={<Sizm />} />
        <Route path='/rehabilitation' element={<Slava />} />
        <Route path='/statusVariants' element={<Loyauts />} />
        <Route path='/status' element={<News />} />
      </Route>
    </Routes>
  );
}

export default Router;
