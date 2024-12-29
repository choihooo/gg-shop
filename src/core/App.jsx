import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Login/pages/Login";
import Register from "../Register/pages/Register";
import FindId from "../FindId/page/FindId";
import ResetPw from "../ResetPw/page/ResetPw";
import Store from "../Store/pages/Store";
import Layout from "../shared/components/Layout/Layout";
import Product from "../Product/pages/Product";
import PayLink from "../PayLink/pages/PayLink";
import ConfirmDelivery from "../ConfirmDelivery/pages/ConfirmDelivery";
import SendList from "../SendList/pages/SendList";
import PaymentList from "../PaymentList/pages/PaymentList";
import PaymentLinkReceiver from "../PaymentLinkReceiver/pages/PaymentLinkReceiver";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find-id" element={<FindId />} />
        <Route path="/reset-pw" element={<ResetPw />} />
        <Route path="/store/*" element={<Layout />}>
          <Route path="*" element={<Store />} />
        </Route>

        <Route path="/product/*" element={<Layout />}>
          <Route path="*" element={<Product />} />
        </Route>

        <Route path="/link/*" element={<Layout />}>
          <Route path="*" element={<PayLink />} />
        </Route>

        <Route path="/send-link/*" element={<Layout />}>
          <Route path="*" element={<SendList />} />
        </Route>

        <Route path="/confirm/*" element={<ConfirmDelivery />} />
        <Route path="/order/*" element={<PaymentLinkReceiver />} />

        <Route path="/pay-list/*" element={<Layout />}>
          <Route path="*" element={<PaymentList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
