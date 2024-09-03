import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Signuppage from "./Pages/Signuppage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signuppage/>}/>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App
