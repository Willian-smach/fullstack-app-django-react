import logo from './logo.svg';
import './App.css';
import AppBar from './components/bar/AppBar';
import Home from './components/screens/Home'

function App() {
  return (
    <div className="App">
      <AppBar />

      <Home />
    </div>
  );
}

export default App;
