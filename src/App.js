import './App.scss';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { useLocation } from 'react-router-dom';

function App() {
  const currentPage = useLocation().pathname;
  return (
    <div className={`App w-full h-full bg-black bg-cover bg-fixed bg-no-repeat ${currentPage === "/" ? "home" : currentPage === "/destination" ? "destination" : currentPage === "/crew" ? "crew" : "technology"}`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
