import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../src/components/page/login"
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
