// import { useNavigate } from "react-router-dom";
// import Imagefront from "../assets/Imagefront.jpg";
// import "../App.css";
// import { Button } from "react-bootstrap";
// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import axios from "axios";
import { useUserContext } from "../userRoleContext";
// function Login() {
//   const navigate = useNavigate();
//   const [data, setData] = useState({ email: "", password: "" });

//   const loginUser = async (e) => {
//     const {updatedUserRole} = useUserContext();

//     e.preventDefault();

//     const { email, password } = data;
//     try {
//       const { response } = await axios.post("/auth", { email, password });

//       console.log(response);
//       //if data contains error dispaly toast error
//       if (response && response.data) {
//         const {success, message, role} = response.data;
//         if(success && message && role) {
//           // Update user's role in the context
//           updatedUserRole(role);
//           handlesuccess(message);
//           setTimeout(() => {
//             navigate("/dashboard");
//           }, 1500);

//         }
//         toast.success(data.message);
//         setData({});

//       } else {
//         toast.error(data.error);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <div className="login-template d-flex justify-content-center align-items-center">
//         <div className="container p-5">
//           <div className="row">
//             <div className="col-md-6 rowpad">
//               <div className="image-container image-animation">
//                 <img src={Imagefront} alt="front img" className="front-img" />
//               </div>
//             </div>
//             <div className="col-md-6 rowpad">
//               <div className="form-container p-1 rounded-end bg-white  ">
//                 <form onSubmit={loginUser}>
//                   <h3 className="text-center mb-5 text-black">Login Here</h3>
//                   <div className="mb-4 text-black">
//                     <label htmlFor="email">Email</label>
//                     <input
//                       type="email"
//                       placeholder="Enter Email"
//                       className=" form-control text-black mb-4"
//                       value={data.email}
//                       onChange={(e) =>
//                         setData({ ...data, email: e.target.value })
//                       }
//                     />
//                   </div>
//                   <div className="mb-5 text-black">
//                     <label htmlFor="password">Password</label>
//                     <input
//                       type="password"
//                       placeholder="Enter password"
//                       className=" form-control mb-5"
//                       value={data.password}
//                       onChange={(e) =>
//                         setData({ ...data, password: e.target.value })
//                       }
//                     />
//                   </div>

//                   <Button type="submit" className="loginbutton">
//                     Login
//                   </Button>
//                 </form>
//                 <ToastContainer />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useNavigate } from "react-router-dom";
// import ImageFront from "../assets/Imagefront.jpg";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
// import { useUserContext } from "../UserContext";

const Login = () => {
  const { updatedUserRole } = useUserContext();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleError = (err) => {
    toast.error(err, {
      position: "top-right",
    });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "top-right",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth", {
        ...formData,
      });

      if (response && response.data) {
        const { success, message, role } = response.data;
        console.log(response.data);
        if (success && message && role) {
          await updatedUserRole(String(role));
          handleSuccess(message);
          setTimeout(() => {
            navigate("/dashboard");
          }, 1000);
        } else {
          handleError(message);
        }
      } else {
        handleError("Invalide response from the server");
      }
    } catch (err) {
      console.error(err);
      handleError("An error occured while logging in ");
    }
    setFormData({
      ...formData,
    });
  };

  return (
    <div>
      <div className="login-template d-flex justify-content-center align-items-center">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6 rowpad">
              <div className="image-container image-animation">
                {/* <img src={ImageFront} alt="front img" className="front-img" /> */}
              </div>
            </div>
            <div className="col-md-6 rowpad">
              <div className="form-container p-1 rounded-end bg-white  ">
                <form>
                  <h3 className="text-center mb-5 text-black">Login Here</h3>
                  <div className="mb-4 text-black">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      className=" form-control text-black mb-4"
                      value={email}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="mb-5 text-black">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      className=" form-control mb-5"
                      value={password}
                      onChange={handleOnChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="loginbutton"
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                  {/* <Link to="/register" className="btn btn-outline-danger">
                    Register
                  </Link> */}
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
