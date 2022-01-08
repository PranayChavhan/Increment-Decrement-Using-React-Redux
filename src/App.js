import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {incNumber, decNumber} from "./actions/index";

function App() {

  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <a className="quantity_minus" title="Decrement"
          onClick={()=> dispatch(decNumber())}
          >
            <span>-</span>
          </a>
          <input
            type="text"
            name="quantity"
            className="quantity_input"
            value={myState}
          />
          <a className="quantity_plus" title="Increment"
          onClick={()=> dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
