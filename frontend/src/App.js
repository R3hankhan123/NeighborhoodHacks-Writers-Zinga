import './App.css';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
function App() {
  return (
    <div className="App">
      {/*WriterZinga
      Color palette:
      Sky:#CAEBF2
      Carbon:#A9A9A9
      Watermelon:#FF3B3F
      Neutral:#EFEFEF
      */}

<Navbar />
<Background />
<Body />
    </div>
  );
}

export default App;
