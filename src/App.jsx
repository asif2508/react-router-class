import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CustomFooter } from "./pages/CustomFooter";
import Header from "./pages/Header";
import Home from "./pages/Home";
import News from "./pages/News";
import ProductDetails from "./pages/ProductDetails";

export const CartContext = createContext(null);

function App() {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-news" element={<News />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
        <CustomFooter />
      </div>
    </CartContext.Provider>
  );
}

export default App;

// first import the BrowserRouter in main.jsx
// Context API => helps us to manage states globally

// 1. define a variable for context api with createContext() function
// 2. set an initial state for storing the value
// 3. create a provider component and wrap the app with it
// 4. then use useContext hook to access the value
