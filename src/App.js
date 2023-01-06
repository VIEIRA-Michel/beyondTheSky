import Header from './components/Header/Header';
// import Homepage from "./views/Homepage/Homepage";
import Destination from "./views/Destination/Destination";
import './App.scss';
function App() {
  return (
    <div className="App w-full h-full">
      <Header />
      {/* <Homepage /> */}
      <Destination />
    </div>
  );
}

export default App;
