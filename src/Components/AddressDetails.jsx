import React from "react";
import { useFormik } from "formik";
import { AddressSchema } from "../Schemas/AddressSchema";
import { setAddressDetails } from "../redux/slices/addressSlice";
import { useDispatch,useSelector } from "react-redux";

const AddressDetails = ({handleNext,handleBack}) => {

const dispatch=useDispatch();
const address=useSelector((state)=>state.address)

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        village: address?.village||"",
        state:address?.state||"",
        city:address?.city||"",
        nationality:address?.nationality||"",
      },
      validationSchema:AddressSchema,
      onSubmit: (values) => {
       dispatch(setAddressDetails(values))
       handleNext();
       
      },
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="village">Village</label>
        <input
          type="text"
          placeholder="Enter village"
          style={{ textAlign: "center" }}
          id="village"
          name="village"
          value={values.village}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        {errors.village && touched.village ? <span style={{color:"red"}}>{errors.village}</span>:null}
        <br />
        <br />
        <label htmlFor="state">State</label>
        <input
          type="text"
          placeholder="Enter state"
          style={{ textAlign: "center" }}
          id="state"
          name="state"
          value={values.state}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
         {errors.state && touched.state ? <span style={{color:"red"}}>{errors.state}</span>:null}
        <br />
        <br />
        <label htmlFor="city">City</label>
        <input
          type="text"
          placeholder="Enter city"
          style={{ textAlign: "center" }}
          id="city"
          name="city"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        {errors.city && touched.city ? <span style={{color:"red"}}>{errors.city}</span>:null}
        <br />
        <br />
        <label htmlFor="nationality">Nationality</label>
        <input
          type="text"
          placeholder="Enter nationality"
          style={{ textAlign: "center" }}
          name="nationality"
          id="nationality"
          value={values.nationality}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        {errors.nationality && touched.nationality ? <span style={{color:"red"}}>{errors.nationality}</span>:null}
        <br />
        <br />
        <button onClick={handleBack} className="btn"
          style={{ backgroundColor: "yellow", color: "Black" }}>Back</button>
        <button className="btn" type="submit">Next</button>
      </form>
    </div>
  );
};

export default AddressDetails;
