import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/productlist/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newproduct/NewProduct";

function App() {
  return (
    <Router>
      <TopBar />

      <div className="container">
        <Sidebar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="users" element={<UserList />} />
          <Route path="users/user/:userId" element={<User />} />
          <Route path="newuser" element={<NewUser />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/product/:userId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
