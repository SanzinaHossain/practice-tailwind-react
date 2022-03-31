import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div>
      <Header></Header>
          <h1 className=" text-center text-5xl font-bold text-green-600 underline">
      Welcome to Tailwind
    </h1>
    <br/>
    <Pricing></Pricing>
    <br/>
    </div>
  );
}

export default App;
