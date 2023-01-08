import Header from './components/Header/Header';
// import Homepage from "./views/Homepage/Homepage";
import Destination from "./views/Destination/Destination";
import Crew from "./views/Crew/Crew";
import Technology from "./views/Technology/Technology";

import './App.scss';

function App() {
  return (
    <div className="App w-full h-full">
      <Header />
      {/* <Homepage /> */}
      {/* <Destination /> */}
      {/* <Crew /> */}
      <Technology />
    </div>
  );
}

export default App;
