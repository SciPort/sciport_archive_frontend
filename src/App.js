import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Course from "./pages/Course";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Course />} />
    </Routes>
  );
}

export default App;
