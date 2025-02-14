import React, { useState } from "react";
import { UserDetailsSchema } from "../Schemas/UserDetailsSchema";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../redux/slices/userSlice";
// import registrationimg from 'E:\ReusableComponents\Stepper\public\registrationimg.jpg'
const UserDetails = ({ handleNext }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // Variable for show and hide password

  const [showPassword, setShowPassword] = useState(false);

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: user?.name || "",
        mobile: user?.mobile || "",
        email: user?.email || "",
        password: user?.password || "",
        confirmpassword: user?.confirmpassword || "",
      },
      validationSchema: UserDetailsSchema,
      enableReinitialize: true,
      onSubmit: (values) => {
        dispatch(setUserDetails(values));
        handleNext();
      },
    });

  return (

    <div className="bg-white mx-auto h-4/5 w-5/6 flex rounded-2xl shadow-2xl overflow-hidden ">
      <div className="w-7/10 ">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-xl font-bold text-gray-500 pt-4" >
            <i className="text-4xl font-serif">HashStudioz </i>
            <br />
            <span className="pl-12 font-sans">Technology</span>
          </h1>
        
        </div>
        <div className="pl-8 pr-8 pt-2">
        <span>
            <h2 className="font-serif text-2xl opacity-50 font-bold ">
              User's Common Details
            </h2>
          </span>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 space-x-4 pt-2">
              <div className="flex flex-col ">
                <label htmlFor="name" className="opacity-70 pb-2">
                  Name
                </label>
                <input
                  className="border border-gray-400 rounded p-2"
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  id="name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.name && touched.name ? (
                  <span style={{ color: "red" }}>{errors.name}</span>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label htmlFor="mobile" className="opacity-70 pb-2">
                  Mobile
                </label>
                <input
                  type="text"
                  className="border border-gray-400 rounded p-2"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  id="mobile"
                  value={values.mobile}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.mobile && touched.mobile ? (
                  <span style={{ color: "red" }}>{errors.mobile}</span>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col pt-2">
              <label htmlFor="email" className="opacity-70 pb-1">
                Email
              </label>
              <input
                type="text"
                className="border border-gray-400 rounded p-2"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter Email Address"
                id="email"
              />
              {errors.email && touched.email ? (
                <span style={{ color: "red" }}>{errors.email}</span>
              ) : null}
            </div>

            <div className="grid grid-cols-2 space-x-4 pt-2 mb-3">
              <div className="flex flex-col pt-2">
                <label htmlFor="password" className="opacity-70 pb-1">
                  Password*
                </label>
                <div className="relative ">
                <input
                  type={showPassword ? "text" : "password"}
             
                    className="w-full border border-gray-400 rounded p-2 pr-10 focus:outline-none"
                  name="password"
                  autoComplete="off"
                  placeholder="Password"
                  id="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              
                <button
                  onClick={() => setShowPassword((prev) => !prev)}
                  
                  type="button"
                   className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-black"
                >
                  {" "}
                  <i
                    className={
                      showPassword
                        ? "fa-regular fa-eye"
                        : "fa-regular fa-eye-slash"
                    }
                  ></i>
                </button>
                </div>
                {errors.password && touched.password ? (
                  <span style={{ color: "red" }}>{errors.password}</span>
                ) : null}
                
              </div>

              <div className="flex flex-col pt-2">
                <label htmlFor="confirmpassword" className="opacity-70 pb-1">
                  Confirm Password*
                </label>
                <input
                  type="password"
                  className="border border-gray-400 rounded p-2"
                  name="confirmpassword"
                  autoComplete="off"
                  placeholder="Confirm Password"
                  id="confirmpassword"
                  value={values.confirmpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.confirmpassword && touched.confirmpassword ? (
                  <span style={{ color: "red" }}>{errors.confirmpassword}</span>
                ) : null}
              </div>
            </div>

            <button className="btn w-full mt-1" type="submit">
              Next
            </button>
          </form>
        </div>
      </div>
      <div
        className="w-1/2 bg-cover bg-center bg-no-repeat shadow-lg"
        style={{ backgroundImage: "url('/registrationimg.jpg')" }}
      ></div>
    </div>
  );
};

export default UserDetails;
