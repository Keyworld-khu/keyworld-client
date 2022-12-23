import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Admin from "./pages/Admin";
import "./assets/css/index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
