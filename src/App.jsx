import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import News from "./pages/News";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-news" element={<News />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;

// first import the BrowserRouter in main.jsx
