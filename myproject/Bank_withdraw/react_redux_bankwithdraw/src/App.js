import React from "react";
import './App.css';
import Home from './Components/Home';
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Home name={'Janny'}/>
      </React.Fragment>
    </Provider>
    
  );
}

export default App;
