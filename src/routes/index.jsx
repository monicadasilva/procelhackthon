import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { SignupPage } from "../pages/Signup";
import { UserPlacePage } from "../pages/user-place";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/myplace" element={<UserPlacePage />} />
    </Routes>
  );
};
