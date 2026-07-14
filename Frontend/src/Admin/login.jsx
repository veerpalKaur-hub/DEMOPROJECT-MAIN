import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful");

      if (res.data.user.admin) {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Invalid Email or Password"
      );
       } finally {
      setLoading(false);
    }
  };
  
    return(
        <>
        <div>
            <div className="relative w-full h-screen ">
            <img
              src="/images/log.jpg"
              alt="bg image"
              className="w-full h-full  object-cover"
            />
            </div>
            <div className=" ml-15 absolute inset-0 flex  justify-center items-center text-white text-left "> 
                <div className="bg-slate-950/90 border border-white/30 w-110 flex flex-col justify-center items-center rounded-2xl ">
                    <img src="/images/logo.png" alt="logo" className="w-20 h-20 "/>
                  <h2 className="text-3xl font-bold font-mono">LOGIN</h2>
                  <p className="font-mono text-xl">Your Journey Home Begins Here.</p>

                  <form
                          onSubmit={handleSubmit}
                          className="space-y-6"
                     >


                    <div className="flex flex-row items-center justify-center border-2 border-gray-400 w-80 h-10 mt-3 rounded-2xl"  > 
                     <Mail className="text-gray-400 "/>
                    <input
                     type="email" 
                     id="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     placeholder="EMAIL ADDRESS"
                    className="outline-none ml-3"
                    />
                    </div> 

                    <div className="relative flex flex-row items-center justify-center border-2 border-gray-400 w-80 h-10 mt-3 rounded-2xl"  > 
                     <Lock className="text-gray-400 "/>
                    <input
                     type={showPassword ? "text" : "password"}
                     id="password"
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                     placeholder="PASSWORD"
                    className=" ml-3 outline-none bg-transparent text-white placeholder-gray-400"
                    />
                        <button
                             type="button"
                             onClick={() =>
                               setShowPassword(!showPassword)
                             }
                             className="absolute right-3 top-1 text-white"
                           >
                             {showPassword ? (
                               <EyeOff size={30} className="text-gray-400" />
                             ) : (
                               <Eye size={30} className="text-gray-400" />
                             )}
                           </button>
                    </div>

                     <div className="flex justify-between text-sm">

                          <label className="flex gap-2 text-white">
                            <input type="checkbox" />
                            Remember Me
                          </label>
            
                          <Link
                            to="/forgot-password"
                            className="text-blue-300"
                          >
                            Forgot Password?
                          </Link>

                       </div> 

                        <button
                              disabled={loading}
                              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold"
                            >
                              {loading ? "Logging In..." : "Login"}
                            </button>

                  </form>

                   <p className="text-center text-gray-300 mt-8">

                        Don't have an account?
            
                        <Link
                          to="/register"
                          className="text-blue-300 ml-2 font-semibold"
                        >
                          Register
                        </Link>

                     </p>
                </div>
            </div>
      </div>
      </>
    )
     }
  