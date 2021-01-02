import logo from './logo.svg';
import './App.css';
import { useImmerReducer } from "use-immer";
import { Button, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import Iframe from 'react-iframe'

import {reducer, initialState} from "./reducer";

function App() {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
          {state.login}
        </a>
        <Button onClick={()=>dispatch({type: "login"})} type="primary">PRESS ME</Button>
        <button onClick={() => dispatch({ type: "login" })}>Login0</button>
          <button onClick={() => dispatch({ type: "reset" })}>reset</button>
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>

          <Iframe url="https://widget.finnhub.io/widgets/stocks/chart?symbol=MSFT&watermarkColor=blue&backgroundColor=white&textColor=black"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
      </header>
      
    </div>
  );
}

export default App;
