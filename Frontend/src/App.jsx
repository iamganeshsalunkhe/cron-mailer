import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Signuppage from "./Pages/Signuppage";
import Loginpage from "./Pages/Loginpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/signup" element={<Signuppage/>}/>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App
