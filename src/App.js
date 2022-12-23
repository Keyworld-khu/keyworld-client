import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Admin from "./pages/Admin";
import "./assets/css/index.css";
import AdminNotice from "./pages/AdminNotice";
import AdminTech from "./pages/AdminTech";
import AdminProduct from "./pages/AdminProduct";
import AdminSupport from "./pages/AdminSupport";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/notice" element={<AdminNotice />} />
        <Route path="/admin/tech" element={<AdminTech />} />
        <Route path="/admin/product" element={<AdminProduct />} />
        <Route path="/admin/support" element={<AdminSupport />} />
      </Routes>
    </div>
  );
}

export default App;
