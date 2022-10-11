import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../src/components/page/login";
import Header from "./components/Header";
import Main from "./pages/main";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
