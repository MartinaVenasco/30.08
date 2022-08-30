import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("324668");
  const [isRendered, setRendered] = useState(false);

  console.log(inputValue);

  return (
    <div className="App">
      <MainInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        isRendered={isRendered}
        onFormsubmit={setRendered}
      />
      <MovieEntity
        movieID={inputValue}
        setInputValue={setInputValue}
        isRendered={isRendered}
      />
    </div>
  );
}

export default App