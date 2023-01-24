import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";

function App() {
  return (
    <Router>
      <TopBar />

      <div className="container">
        <Sidebar />
        <Routes>
          <Route index element={<Home />} />
          <Route  path="users" element={<UserList />} />
          <Route  path="users/user/:userId" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
