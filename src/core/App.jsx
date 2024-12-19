import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Login/pages/Login";
import Register from "../Register/pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
