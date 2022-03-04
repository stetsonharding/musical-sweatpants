import "./App.css";
import ApiProvider from "./providers/ApiProvider";
import CurrentAlbumProvider from "./providers/CurrentAlbumProvider";
import SweatpantSizeProvider from "./providers/SweatpantSizeProvider";
import OrderFormProvider from "./providers/OrderFormProvider"
import AddToCartProvider from "./providers/AddToCartProvider";
import Layout from "./components/builder/Layout";
import OrderComplete from "./components/builder/OrderComplete"


import OrderInfoLayout from "./components/orderInfo/OrderInfoLayout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ApiProvider>
        <CurrentAlbumProvider>
          <SweatpantSizeProvider>
            <AddToCartProvider>
              <OrderFormProvider>
              <div className="App-container">
                <Routes>
                  <Route exact path="/musical-sweatpants" element={<Layout/>} />
                  <Route path="/musical-sweatpants/orderDetails" element={<OrderInfoLayout/>} />
                  <Route path="/orderComplete" element={<OrderComplete />} />
                </Routes>
              </div>
              </OrderFormProvider>
            </AddToCartProvider>
          </SweatpantSizeProvider>
        </CurrentAlbumProvider>
      </ApiProvider>
    </Router>
  );
}
export default App;
