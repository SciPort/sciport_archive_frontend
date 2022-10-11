import "./App.css";
import { Routes, Route } from "react-router-dom";
import Course from "./pages/Course";
import Header from "./components";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Course />} />
      </Routes>
    </>
  );
}

export default App;
