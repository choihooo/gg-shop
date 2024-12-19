import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Login/pages/Login";
import Register from "../Register/pages/Register";
import FindId from "../FindId/page/FindId";
import ResetPw from "../ResetPw/page/ResetPw";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find-id" element={<FindId />} />
        <Route path="/reset-pw" element={<ResetPw />} />
      </Routes>
    </Router>
  );
}

export default App;
