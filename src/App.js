import Header from './components/Header/Header';

import Homepage from "./views/Homepage/Homepage";
import './App.scss';
function App() {
  return (
    <div className="App w-full h-full">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
