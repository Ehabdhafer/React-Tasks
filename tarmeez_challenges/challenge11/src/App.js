import "./App.css";
import Header from "./components/header";
import Left from "./components/left";
import Right from "./components/right";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex mt-4">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
