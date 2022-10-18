import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/style";
import Header from "./components/common/header";
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