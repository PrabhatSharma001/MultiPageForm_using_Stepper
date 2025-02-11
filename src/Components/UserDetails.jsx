import React, { useState } from "react";
import {UserDetailsSchema} from '../Schemas/UserDetailsSchema'
import { useFormik } from "formik";
import { useDispatch,useSelector} from "react-redux";
import { setUserDetails } from "../redux/slices/userSlice";

const UserDetails = ({handleNext}) => {

  const dispatch=useDispatch();
const user=useSelector((state)=>state.user);

// Variable for show and hide password

const [showPassword,setShowPassword]=useState(false);


  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues:{
        name: user ?.name || "",
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
    <div> 
      <h2>User's Common Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          style={{ textAlign: "center" }}
          id="name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        
        {errors.name && touched.name ? <span style={{color:"red"}}>{errors.name}</span>:null}
        <br />
        <br />
        <label htmlFor="mobile">Mobile</label>
        <input
          type="text"
          name="mobile"
          placeholder="Enter Mobile Number"
          style={{ textAlign: "center" }}
          id="mobile"
          value={values.mobile}
          onBlur={handleBlur}
          onChange={handleChange}
        />
         {errors.mobile && touched.mobile ? <span style={{color:"red"}}>{errors.mobile}</span>:null}
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter Email Address"
          style={{ textAlign: "center" }}
          id="email"
        />
        {errors.email && touched.email ? <span style={{color:"red"}}>{errors.email}</span>:null}
        <br />
        <br />
        <label htmlFor="password">Password*</label>
        <input
        
          type={showPassword ?"text":"password"}
          name="password"
          autoComplete="off"
          placeholder="Password"
          style={{ textAlign: "center" }}
          id="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
<button onClick={()=>setShowPassword((prev)=>!prev)}  style={{
    background: "none",
    border: "none",
    cursor: "pointer",
    marginLeft: "10px"
  }} type="button"> <i className={showPassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"} ></i></button>
       

         {errors.password && touched.password ? <span style={{color:"red"}}>{errors.password}</span>:null}
        <br />
        <br />
        <label htmlFor="confirmpassword">Confirm Password*</label>
        <input
          type="password"
          name="confirmpassword"
          autoComplete="off"
          placeholder="Confirm Password"
          style={{ textAlign: "center" }}
          id="confirmpassword"
          value={values.confirmpassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmpassword && touched.confirmpassword ? <span style={{color:"red"}}>{errors.confirmpassword}</span>:null}
        <br />
        <br />
        <button  className="btn" type="submit">Next</button>
      </form>
    </div>
  );
};

export default UserDetails;
