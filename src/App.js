import "./App.css";
import ApiProvider from "./providers/ApiProvider";
import Layout from "./components/builder/Layout";

function App() {
  return (
    <ApiProvider>
      <div className="App-container">
        <Layout />
      </div>
    </ApiProvider>
  );
}

export default App;
