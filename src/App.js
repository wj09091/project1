import Viewer from "./component/Viewers";
import Controller from "./component/Controller";
import { useEffect } from "react";
import { VoteProvider } from "./component/VoteContext";
import './App.css';

function App() {
  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("깜빡");
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  });

  return (
    <VoteProvider>
      <div className="App">
        <h1>투표</h1>
        <section>
          <Viewer />
        </section>
        <section>
          <Controller />
        </section>
      </div>
    </VoteProvider>
  );
}

export default App;
