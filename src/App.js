import Home from "./components/Home";
import Login from "./components/Login";
import Password from "./components/Password";
import ResetPassword from "./components/ResetPassword";
import RecoveryMail from "./components/RecoveryMail";
import NewPassword from "./components/NewPassword";
import ResetPasswordSuccessful from "./components/ResetPasswordSuccessful";
import DashBoard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/password" element={<Password />}></Route>
          <Route path="/resetpassword" element={<ResetPassword />}></Route>
          <Route path="/recoverymail" element={<RecoveryMail />}></Route>
          <Route path="/newpassword" element={<NewPassword />}></Route>
          <Route
            path="/resetpasswordsuccessful"
            element={<ResetPasswordSuccessful />}
          ></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
