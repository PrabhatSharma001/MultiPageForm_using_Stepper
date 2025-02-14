// import React from "react";
import { useFormik } from "formik";
import { AddressSchema } from "../Schemas/AddressSchema";
import { setAddressDetails } from "../redux/slices/addressSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from "react";
import axios from "axios";
import { state_City } from "../StateJson";
const AddressDetails = ({ handleNext, handleBack }) => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.address);

// +++++++++++++++++++ State Api ++++++++++++++++++++++++++++++++

const states=Object.keys(state_City);
// console.log(states);

for (const state of states) {
  console.log(state);
}

// ++++++++++++++++++++++++++ state api +++++++++++++++++++++=

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        village: address?.village || "",
        state: address?.state || "",
        city: address?.city || "",
        nationality: address?.nationality || "",
      },
      validationSchema: AddressSchema,
      onSubmit: (values) => {
        dispatch(setAddressDetails(values));
        handleNext();
      },
    });

  return (
    <div className="bg-white mx-auto h-4/5 w-5/6 flex rounded-2xl shadow-2xl overflow-hidden">
      <div className="w-7/10 ">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-xl font-bold text-gray-500 pt-4">
            <i className="text-4xl font-serif">HashStudioz </i>
            <br />
            <span className="pl-12 font-sans">Technology</span>
          </h1>
   
        </div>
        <div className="p-8">
          <span>
            <h2 className="font-serif text-2xl opacity-50 font-bold">
              User's Address Details
            </h2>
          </span>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col pt-2 ">
              <label htmlFor="village" className="opacity-70 pb-1">
                Village
              </label>
              <input
                type="text"
                placeholder="Enter village"
                className="border border-gray-400 rounded p-2"
                id="village"
                name="village"
                value={values.village}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              {errors.village && touched.village ? (
                <span style={{ color: "red" }}>{errors.village}</span>
              ) : null}
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col pt-2 ">
                <label htmlFor="state" className="opacity-70 pb-1">
                  State
                </label>
                <input
                  type="text"
                  className="border border-gray-400 rounded p-2"
                  placeholder="Enter state"
                  id="state"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />{" "}
                {/* <select name="state" id="state">

                </select> */}
                {errors.state && touched.state ? (
                  <span style={{ color: "red" }}>{errors.state}</span>
                ) : null}
              </div>
              <div className="flex flex-col pt-2 ">
                <label htmlFor="city" className="opacity-70 pb-1">
                  City
                </label>
                <input
                  type="text"
                  className="border border-gray-400 rounded p-2"
                  placeholder="Enter city"
                  id="city"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />{" "}
                {errors.city && touched.city ? (
                  <span style={{ color: "red" }}>{errors.city}</span>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col pt-2 ">
              <label htmlFor="nationality" className="opacity-70 pb-1">
                Nationality
              </label>
              <input
                type="text"
                className="border border-gray-400 rounded p-2"
                placeholder="Enter nationality"
                name="nationality"
                id="nationality"
                value={values.nationality}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              {errors.nationality && touched.nationality ? (
                <span style={{ color: "red" }}>{errors.nationality}</span>
              ) : null}
            </div>
            <div className="grid grid-cols-3  gap-5 pt-5">
              <button
                onClick={handleBack}
                className="btn "
                style={{ backgroundColor: "yellow", color: "Black" }}
              >
                Back
              </button>
              <div></div>
              <button className="btn" type="submit">
                Next
              </button>
            </div>
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

export default AddressDetails;
