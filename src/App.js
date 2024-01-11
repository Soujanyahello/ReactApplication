import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Welcome from './components/Welcome';
import Greet from './components/Greet';
function App() {
  return (
    <div className="App">
    
    <Greet name="bruce" heroname="Fighter"><p>his is children props</p></Greet>
    <Greet name="clark" heroname="Superman"><button>Action</button></Greet>
    <Greet name="Diana" heroname="wonderwomen"></Greet>
    
    </div>
  );
}

export default App;
