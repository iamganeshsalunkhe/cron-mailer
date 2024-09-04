import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Signuppage from "./Pages/Signuppage";
import Loginpage from "./Pages/Loginpage";
import Forgotpasswordpage from "./Pages/Forgotpasswordpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/signup" element={<Signuppage/>}/>
        <Route path='/forgotpassword' element={<Forgotpasswordpage/>}/>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App
