import { Route, Routes } from "react-router-dom";
import Register from "../views/user/Register";

export default function Routing(props) {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/Login" element={<h1>Login</h1>}/>
    </Routes>
  );
}