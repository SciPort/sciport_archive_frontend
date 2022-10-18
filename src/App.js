import "./App.css";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { Login } from "./pages/login/style";
import Header from "./components/common/header";
=======
import Login from "../src/components/page/login";
import Header from "./components/Header";
import Main from "./pages/main";
>>>>>>> 09a7f4efb9d714fd1fd4c22b37a5a7c90922beda
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
