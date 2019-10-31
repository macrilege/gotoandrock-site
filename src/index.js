import React from "react";
import ReactDOM from "react-dom";
import answerData from "./Data";
import Magic8Ball from "./Magic8Ball";
//import "./styles.css";

function App() {
  return (
    <div className="App">
      <Magic8Ball answerData={answerData} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
