import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/index";
import Header from "./components/common/header";
import Main from "./pages/main"
import Register from "./pages/register/index";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
