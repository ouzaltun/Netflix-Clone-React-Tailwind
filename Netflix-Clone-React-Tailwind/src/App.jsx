import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/tr/" />}></Route>
        <Route path="/tr/" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
