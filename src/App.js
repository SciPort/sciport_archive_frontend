import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../src/components/page/login";

import Main from "./pages/main";
import Header from "./components/common/header";
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
