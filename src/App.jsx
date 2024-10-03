
import { Route, Routes,BrowserRouter } from "react-router-dom";
import  Login from "./pages/login";
import  Home from "./pages/home";
import  SignUp from "./pages/signup";



function App() {
  return (
    <>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
