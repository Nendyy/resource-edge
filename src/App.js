import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Password from "./Screens/Password";
import ResetPassword from "./Screens/ResetPassword";
import RecoveryMail from "./Screens/RecoveryMail";
import NewPassword from "./Screens/NewPassword";
import ResetPasswordSuccessful from "./Screens/ResetPasswordSuccessful";
import DashBoard from "./Screens/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/password" element={<Password />}></Route>
          <Route path="/reset_password" element={<ResetPassword />}></Route>
          <Route path="/recovery_mail" element={<RecoveryMail />}></Route>
          <Route path="/new_password" element={<NewPassword />}></Route>
          <Route
            path="/reset_password_successful"
            element={<ResetPasswordSuccessful />}
          ></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
