import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/index";
import Header from "./components/common/header";
import Main from "./pages/main";
import Register from "./pages/register/index";
import Detail from "./pages/detail/index";
import CreateLec from "./pages/createLec/index";
import { atom, RecoilRoot } from "recoil";
export const closeState = atom({
  key: "close",
  default: false,
});
export const Category1 = atom({
  key: "category1",
  default: [],
});
export const Category2 = atom({
  key: "category2",
  default: [],
});
export const Category3 = atom({
  key: "category3",
  default: [],
});
export const SetState = atom({
  key: "set",
  default: new Set(),
});

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
          <Route exact path="/createLec" element={<CreateLec />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
