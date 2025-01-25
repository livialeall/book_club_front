import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from "./pages/Register/Index";
import UserPage from "./pages/User/index"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
