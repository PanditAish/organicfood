import React, { useContext} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Cartcontext from "../Context/Cartcontext";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../Redux/authProvider/Action";
import { useDispatch } from "react-redux";
import Abouthero from "../Component/About/Abouthero";
import { toast } from "react-toastify";

const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name must be at most 25 characters")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),
  confirm_password: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Registration = () => {

  const { registerUser } = useContext(Cartcontext);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    errors,
    handleBlur,
    handleChange,
    touched,
    values,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values, { resetForm }) => {
      // console.log("Form Data:", values);
      try {
      const { confirm_password, ...userData } = values;
      registerUser(userData);
      console.log("Form Data Stored:", userData);
      
      const payload = { ...userData };
      
      dispatch({type:loginSuccess, payload:payload});

      const existingItem = JSON.parse(localStorage.getItem("Userlist")) || [];
      const updatedItems = [...existingItem, userData];
       localStorage.setItem("Userlist", JSON.stringify(updatedItems));

      // alert("Registration Successful! Data has been stored.");
      toast.success("registration succesfully");
      resetForm();
      navigate("/");
     

      } catch(error) {
        console.error("Registration failed:", error);
        alert("Registration failed. Please try again.");
      }
    },
  });

  return (
    <div
      className="container-fluid p-0 "
    >
        <div className="checkout-div">
          <Abouthero name="Registration" link="/registration" />
        </div>
      <div className="regiback h-100 d-flex justify-content-center align-items-center">
        <div className="container bg-light w-50 p-4 rounded">
          
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="form-outline mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className={`form-control ${
                  errors.name && touched.name ? "is-invalid" : ""
                }`}
                type="text"
                placeholder="Enter Name"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            {/* Email Field */}
            <div className="form-outline mb-3">
              <label className="form-label" htmlFor="email">
                Email Address
              </label>
              <input
                className={`form-control ${
                  errors.email && touched.email ? "is-invalid" : ""
                }`}
                type="email"
                placeholder="Enter Email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            {/* Password Field */}
            <div className="form-outline mb-3">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                className={`form-control ${
                  errors.password && touched.password ? "is-invalid" : ""
                }`}
                type="password"
                placeholder="Enter Password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="form-outline mb-3">
              <label className="form-label" htmlFor="confirm_password">
                Confirm Password
              </label>
              <input
                className={`form-control ${
                  errors.confirm_password && touched.confirm_password
                    ? "is-invalid"
                    : ""
                }`}
                type="password"
                placeholder="Confirm Password"
                name="confirm_password"
                id="confirm_password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password && (
                <div className="invalid-feedback">
                  {errors.confirm_password}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="form-outline mt-4">
              <button type="submit" className="btn btn-primary btn-lg w-100">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
