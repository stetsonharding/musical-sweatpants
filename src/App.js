import "./App.css";
import ApiProvider from "./providers/ApiProvider";
import CurrentAlbumProvider from "./providers/CurrentAlbumProvider";
import SweatpantSizeProvider from "./providers/SweatpantSizeProvider";
// import AddToCartProvider from "./providers/AddToCartProvider";
import AddToCartProvider from "./providers/AddToCartProvider";
import Layout from "./components/builder/Layout";

function App() {
  return (
    <ApiProvider>
      <CurrentAlbumProvider>
        <SweatpantSizeProvider>
          <AddToCartProvider>
            <div className="App-container">
              <Layout />
            </div>
          </AddToCartProvider>
        </SweatpantSizeProvider>
      </CurrentAlbumProvider>
    </ApiProvider>
  );
}

export default App;
