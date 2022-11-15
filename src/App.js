import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/index";
import Header from "./components/common/header";
import Main from "./pages/main";
import Register from "./pages/register/index";
import Detail from "./pages/detail/index";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <>
      <RecoilRoot>
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<Main />} />
          <Route exact path="/detail" element={<Detail />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
