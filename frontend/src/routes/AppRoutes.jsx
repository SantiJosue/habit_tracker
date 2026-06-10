import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Habits from "../pages/Habits";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to='/login' replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/habits" element={<Habits />} />
    </Routes>
  )
}
