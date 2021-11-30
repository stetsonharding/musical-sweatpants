import "./App.css";
import ApiProvider from "./providers/ApiProvider";
import CurrentAlbumProvider from "./providers/CurrentAlbumProvider";
import SweatpantSizeProvider from "./providers/SweatpantSizeProvider";
import Layout from "./components/builder/Layout";

function App() {
  return (
    <ApiProvider>
      <CurrentAlbumProvider>
        <SweatpantSizeProvider>
          <div className="App-container">
            <Layout />
          </div>
        </SweatpantSizeProvider>
      </CurrentAlbumProvider>
    </ApiProvider>
  );
}

export default App;
