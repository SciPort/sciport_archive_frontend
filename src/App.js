import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/header";
import Main from "./pages/main";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
