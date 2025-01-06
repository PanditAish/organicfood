import React from "react";
import Abouthero from "../Component/About/Abouthero";
import { useFormik } from "formik";
import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must be at most 20 characters")
    .required("Please enter your first name"),
  lastname: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must be at most 20 characters")
    .required("Please enter your last name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  city: Yup.string()
    .min(2, "City must be at least 2 characters")
    .max(20, "City must be at most 20 characters")
    .required("Please enter your city"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  address: Yup.string()
    .min(2, "City must be at least 2 characters")
    .max(50, "City must be at most 50 characters")
    .required("Please enter your city"),
});

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  city: "",
  phone: "",
  address: "",
};

const Checkoutpage = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      },
    });

  return (
    <>
      <div>
        <div className="checkout-div">
          <Abouthero name="Checkout" link="/checkout" />
        </div>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="m-2">
                <h3>Billing Details</h3>
                <form onSubmit={handleSubmit}>
                  <div className="d-flex justify-content-between pt-3 gap-2">
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="Firstname">
                        First Name
                      </label>
                      <input
                        // style={{ width: "240px" }}
                        type="text"
                        id="firstname"
                        className="form-control inputone"
                        placeholder="Enter a Firstname"
                        name="firstname"
                        value={values.firstname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                          {errors.firstname && touched.firstname && (
                           <div className="text-danger">{errors.firstname}</div>
                          )}
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="Lastname">
                        Last Name
                      </label>
                      <input
                       
                        type="text"
                        id="lastname"
                        className="form-control inputone"
                        placeholder="Enter a Lastname"
                        name="lastname"
                        value={values.lastname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                          {errors.lastname && touched.lastname && (
                           <div className="text-danger">{errors.lastname}</div>
                          )}
                    </div>
                  </div>

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
                    />

                         {errors.email && touched.email && (
                           <div className="text-danger">{errors.email}</div>
                          )}
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="city">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="form-control"
                      placeholder="Enter a city"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                         {errors.city && touched.city && (
                           <div className="text-danger">{errors.city}</div>
                          )}
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      type="number"
                      id="phone"
                      className="form-control"
                      placeholder="Enter a phone number"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                         {errors.phone && touched.phone && (
                           <div className="text-danger">{errors.phone}</div>
                          )}
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="address">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="form-control"
                      placeholder="Enter a address, house number, street name and state"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                         {errors.address && touched.address && (
                           <div className="text-danger">{errors.address}</div>
                          )}
                  </div>

                  <div>
                    <button type="submit" className="btn btn-primary px-4">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkoutpage;
