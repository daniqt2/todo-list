import "./App.css";

import { Header } from "./components/navigation/Header";
import React from "react";
import { TodoContainer } from "./components/todo/TodoContainer";

function App() {
  return (
    <div className="App  h-full  bg-primary p-0 ">
      <Header />
      <div className="p-6 mt-8 flex h-3/4">
        <TodoContainer />
      </div>
    </div>
  );
}

export default App;
