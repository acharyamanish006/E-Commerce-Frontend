import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import Loader from "./components/Loader/Loader";
import ProductDetails from "./components/Product Details/ProductDetails";

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(true);
  const [isloading, setisloading] = useState(false);
  const [products, setproducts] = useState([
    {
      id: 1,
      // title:"Men Polyfiber Jacket without hoodie (KPJ25225-8a)",
      title: "Jacket",
      description:
        "Machine wash Independently with mildwith domestic and imported materialsDo not bleach Do not dry cleanPlease refer to the size chart in the picture before placing an order to ensure that the waist are suitable. Since your order will not display your size information, please size carefully before placing your order! If you need help, please contact our customer service.",
      price: 1690,
      image:
        "https://static-01.daraz.com.np/p/fba0c6ae25685b28e758e68c8282f98e.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      // title:"College Bag PNG Images, Free Transparent College Bag ",
      title: "Yellow Bag",
      description:
        "Machine wash Independently with mildwith domestic and imported materialsDo not bleach Do not dry cleanPlease refer to the size chart in the picture before placing an order to ensure that the waist are suitable. Since your order will not display your size information, please size carefully before placing your order! If you need help, please contact our customer service.",
      price: 2000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ZkZIP4lJSm7EzOcvOaIB0v3YjTn1ixzS7aheIRc&s",
      rating: 4,
    },
    {
      id: 3,
      // title:"College Bag PNG Images, Free Transparent College Bag ",
      title: "Camera",
      description:
        "Machine wash Independently with mildwith domestic and imported materialsDo not bleach Do not dry cleanPlease refer to the size chart in the picture before placing an order to ensure that the waist are suitable. Since your order will not display your size information, please size carefully before placing your order! If you need help, please contact our customer service.",
      price: 20000,
      image:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 2,
    },
  ]);
  return (
    <div className="container">
      <BrowserRouter>
        {isAuthenticated ? (
          <Navbar products={products} setproducts={setproducts} />
        ) : null}
        <Routes>
          <Route
            element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}
          >
            <Route
              path="/"
              index
              element={isloading ? <Loader /> : <Home products={products} />}
            />
            <Route
              path="/product/:productId"
              element={
                isloading ? <Loader /> : <ProductDetails products={products} />
              }
            />
          </Route>
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to={"/"} /> : <Login />}
          />
          <Route
            path="/register"
            element={isAuthenticated ? <Navigate to={"/"} /> : <Register />}
          />
          <Route path="*" index element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
