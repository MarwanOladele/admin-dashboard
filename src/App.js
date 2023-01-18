import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <TopBar />

      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
