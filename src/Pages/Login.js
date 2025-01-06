import React from "react";
import { useDispatch } from 'react-redux'
import { loginSuccess } from "../Redux/authProvider/Action";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),
});


const Login = () => {

    // const [userName, setUserName] = useState('');

    // const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
      email: "",
      password: "",
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
         initialValues: initialValues,
         validationSchema: signUpSchema,
         onSubmit: (values, { resetForm }) =>{
            
              const storedUsers = JSON.parse(localStorage.getItem('Userlist')) || [];

              const matchingData = storedUsers.find(item => item.email === values.email && item.password === values.password)
              
              if(matchingData){
                dispatch({type:loginSuccess, payload:matchingData});
                resetForm();
                navigate('/');
                 toast.success("Login succesfully");

              } else {
                 // Handle incorrect login
                  alert('Invalid email or password');
               }
         }
    })

    // const loginFun = () =>{
    //      const payload = {
    //         userName: userName,
    //         password: password
    //      }
    //      console.log(payload); 
    //      dispatch({type:loginSuccess, payload:payload});
    //      navigate('/');
    // }

  return (
    <>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100 pt-5">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Samplepic"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="email">
                     Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter a valid email address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // onChange={(e) => setUserName(e.target.value)}
                  /> 

                  {errors.email && touched.email && (
                     <div className="text-danger">{errors.email}</div>
                  )}             
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // onChange={(e) => setPassword(e.target.value)}
                />    

                {errors.password && touched.password && (
                   <div className="text-danger">{errors.password}</div>
                 )}          
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  // onClick={loginFun}
                >
                  Login
                </button>
                 <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="/registration" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
