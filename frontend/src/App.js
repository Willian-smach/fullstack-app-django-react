import './App.css';
import AppBar from './components/bar/AppBar';
import Home from './components/screens/Home'
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store} > 
      
      <div className="App">
        <AppBar />
        <Home />
      </div>
    
    </Provider>
  );
}

export default App;
