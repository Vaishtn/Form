import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/login";
import Profile from "./Components/profile";
import Success from "./Components/success";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/success" element={<Success />} />
      </Routes>
    </>
  );
}
