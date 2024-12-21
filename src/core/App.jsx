import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Login/pages/Login";
import Register from "../Register/pages/Register";
import FindId from "../FindId/page/FindId";
import ResetPw from "../ResetPw/page/ResetPw";
import Store from "../Store/pages/Store";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find-id" element={<FindId />} />
        <Route path="/reset-pw" element={<ResetPw />} />
        <Route path="/store/*" element={<Store />} /> {/* 중첩 라우트 설정 */}
      </Routes>
    </Router>
  );
}

export default App;
