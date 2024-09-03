import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Forgotpassword() {
    const navigate = useNavigate();

  // state for input  email, password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword]= useState('');

  // state for toggle password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // state for toggle confirm password visibility
  const [isConfirmPasswordVisible,setIsConfirmPasswordVisible]= useState(false);

  // check user filled all required fields
  const [isFormValid, setIsFormValid] = useState(false);

  // run the effect when some changes on UI
  useEffect(() => {
    setIsFormValid(
        email !== "" && 
        password !== "" &&
        confirmPassword !== '' && 
        password === confirmPassword
    );
  }, [email, password,confirmPassword]);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleConfirmPasswordVisibility = ()=>{
    setIsConfirmPasswordVisible(prevState =>!prevState);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    await axios
      .post("http://localhost:4200/forgotpassword", userData)
      .then((res) => {
        if (res.data) {
          toast.success("Password changed  successfully");
          navigate('/login');
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Their is problem while setting a new password!!");
        }
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-500">
      <div className="w-72 max-w-md p-2 rounded-xl shadow-md  bg-white h-[340px]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Forgot Password
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-56 sm:max-w-sm">
          <form onSubmit={onSubmit} method="POST" className="space-y-6">
            <div>
              <div className="mt-2 ">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            {/* for getting password */}
            <div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={isPasswordVisible ? "text" : "password"}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  placeholder="create a new password"
                />
                <div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={handlePasswordVisibility}
                >
                  {isPasswordVisible ? <IoMdEyeOff /> : <IoMdEye />}
                </div>
              </div>
            </div>

            {/* for confirm password */}
            <div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="current-password"
                  className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  placeholder="Confirm a new password"
                />
                <div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={handleConfirmPasswordVisibility}
                >
                  {isPasswordVisible ? <IoMdEyeOff /> : <IoMdEye />}
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-xl bg-indigo-600 px-3 py-1.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-600
                      cursor-pointer"
                disabled={!isFormValid}
              >
                Set new password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;
