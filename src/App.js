import "./App.css";
import ApiProvider from "./providers/ApiProvider";
import CurrentAlbumProvider from "./providers/CurrentAlbumProvider";
import Layout from "./components/builder/Layout";

function App() {
  return (
    <ApiProvider>
      <CurrentAlbumProvider>
        <div className="App-container">
          <Layout />
        </div>
      </CurrentAlbumProvider>
    </ApiProvider>
  );
}

export default App;
