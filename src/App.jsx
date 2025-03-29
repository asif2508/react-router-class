import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Banner } from "./pages/Banner";
import { CustomFooter } from "./pages/CustomFooter";
import Header from "./pages/Header";
import Home from "./pages/Home";
import News from "./pages/News";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-news" element={<News />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
      <CustomFooter />
    </div>
  );
}

export default App;

// first import the BrowserRouter in main.jsx
