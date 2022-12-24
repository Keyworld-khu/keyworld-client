import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Admin from "./pages/Admin";
import "./assets/css/index.css";
import AdminNotice from "./pages/AdminNotice";
import AdminProduct from "./pages/AdminProduct";
import AdminSupport from "./pages/AdminSupport";
import AdminAuth from "./pages/AdminAuth";
import AdminPatent from "./pages/AdminPatent";
import AdminInspect from "./pages/AdminInspect";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/notice" element={<AdminNotice />} />
        <Route path="/admin/tech/authentication" element={<AdminAuth />} />
        <Route path="/admin/tech/patent" element={<AdminPatent />} />
        <Route path="/admin/tech/inspection" element={<AdminInspect />} />
        <Route path="/admin/product" element={<AdminProduct />} />
        <Route path="/admin/support" element={<AdminSupport />} />
      </Routes>
    </div>
  );
}

export default App;
