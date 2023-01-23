import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userlist/UserList";

function App() {
  return (
    <Router>
      <TopBar />

      <div className="container">
        <Sidebar />
        <Routes>
          <Route index element={<Home />} />
          <Route  path="users" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
