import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import WithinProvider from "./components/WithinProvider";
import OutsideProvider from "./components/OutsideProvider";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Provider store={store}>
          <WithinProvider />
        </Provider>
        <OutsideProvider />
      </div>
    </>
  );
}

export default App;
