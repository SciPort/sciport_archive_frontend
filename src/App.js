import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login/index";
import Header from "./components/common/header";
import Main from "./pages/main";
import Register from "./pages/register/index";
import Detail from "./pages/detail/index";
import CreateLec from "./pages/createLec/index";
import { atom, RecoilRoot } from "recoil";
function App() {
  return (
    <>
      <RecoilRoot>
        <Header />
        {/* <BrowserRouter> */}
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<Main />} />
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/createLec" element={<CreateLec />} />
        </Routes>
        {/* </BrowserRouter> */}
      </RecoilRoot>
      {/* <Router /> */}
    </>
  );
}

export default App;
