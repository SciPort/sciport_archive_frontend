import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/index";
import Header from "./components/common/header";
<<<<<<< HEAD
import Main from "./pages/main";
=======
import Main from "./pages/main"
>>>>>>> f963aed554e83f0b672f89d226066659632abb66
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
