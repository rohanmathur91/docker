import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App bg-black text-white text-center h-screen">
      <header className="flex flex-col justify-center items-center">
        <img src={logo} className="w-2/5 h-2/5" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1></h1>
    </div>
  );
}

export default App;
