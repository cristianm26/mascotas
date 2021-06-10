import Routers from './components/Routers';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './config/store';

import { BrowserRouter as Router } from "react-router-dom";;



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routers />
        </div>
      </Router>

    </Provider>
  );
}

export default App;
