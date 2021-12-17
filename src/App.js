import "./App.css";
import ApiProvider from "./providers/ApiProvider";
import CurrentAlbumProvider from "./providers/CurrentAlbumProvider";
import SweatpantSizeProvider from "./providers/SweatpantSizeProvider";
// import AddToCartProvider from "./providers/AddToCartProvider";
import AddToCartProvider from "./providers/AddToCartProvider";
import Layout from "./components/builder/Layout";

import OrderInfoLayout from "./components/orderInfo/OrderInfoLayout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ApiProvider>
        <CurrentAlbumProvider>
          <SweatpantSizeProvider>
            <AddToCartProvider>
              <div className="App-container">
                <Routes>
                  <Route exact path="/" element={<Layout />} />
                  <Route path="/orderDetails" element={<OrderInfoLayout />} />
                </Routes>
              </div>
            </AddToCartProvider>
          </SweatpantSizeProvider>
        </CurrentAlbumProvider>
      </ApiProvider>
    </Router>
  );
}

export default App;
