import './App.scss';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App w-full h-full">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
