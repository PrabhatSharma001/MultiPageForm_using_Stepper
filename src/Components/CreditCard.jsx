import React, { useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";

// changes
import { PaymentinfoSchema } from "../Schemas/PaymentinfoSchema";
import { setPaymentDetails } from "../redux/slices/paymentSlice";

import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";



const formatCardNumber = (value) => {
  // Remove all non-numeric characters

  const digitsOnly = value.replace(/\D/g, "");

  // Format as "XXXX XXXX XXXX XXXX"
  return digitsOnly.replace(/(\d{4})/g, "$1 ").trim();
};

// format month

// Format the stored value (YYYY-MM) to display in MM-YY format
// const formatMonth = (date) => {
//   if (!date) return "";
//   const [year, month] = date.split("-");
//   return `${month}-${year.slice(2)}`;  // Format as MM-YY
// };

// // Handle changes in the input field
// const handleFormattedChange = (e) => {
//   const { value, name } = e.target;

//   // Convert the MM-YY format back to YYYY-MM before passing to Formik's handleChange
//   const [month, year] = value.split("-");
//   const formattedValue = `20${year}-${month}`;  // Assuming the year is 20YY

//   // Use Formik's handleChange to update the value in Formik state
//   handleChange({ target: { name, value: formattedValue } });
// };


// month


// changes
const CreditCard = ({ handleNext, handleBack }) => {

// ++++++++++++++++++++++++++++++++++++
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.payment);
  const {
      values,
      errors,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
      setFieldValue,
    } = useFormik({
      initialValues: {
        cardinfo: payment?.cardinfo || "",
        cardholdername:payment?.cardholdername||"",
        cvv: payment?.cvv || "",
        expmonth: payment?.expmonth || "",
        // expyear: payment?.expyear || "",
      },
      validationSchema: PaymentinfoSchema,
  
      onSubmit: (values) => {
        dispatch(setPaymentDetails(values));
        handleNext();
      },
    });
  
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
  // const [number, setNumber] = useState("");
  // const [name, setName] = useState("");
  // const [date, setDate] = useState("");
  // const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");



  return (


    <div  className="bg-white mx-auto h-8/10 w-5/6 flex rounded-2xl shadow-2xl overflow-hidden">
       <div className="w-7/10 ">
       <div className="flex flex-col items-center w-full">
          <h1 className="text-xl font-bold text-gray-500 pt-4">
            <i className="text-4xl font-serif">HashStudioz </i>
            <br />
            <span className="pl-12 font-sans">Technology</span>
          </h1>
          {/* <hr className="w-64 border-t-2 mx-auto  border-red-500"/> */}
        </div>
        <div className="pt-8 pl-8">
        {/* <span>
            <h2 className="font-serif text-2xl opacity-50 font-bold">
              User's Address Details
            </h2>
          </span> */}
        
        
    <div className="flex flex-col items-center ">

      <form className="w-full max-w-md bg-white p-8  shadow-md rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="cardinfo" className="block text-gray-700 font-medium">
            Card Number
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={values.cardinfo}
            autoComplete="off"
             id="cardinfo"
            maxLength={19} // 16 digits + 3 spaces
            name="cardinfo"
            onChange={(e) => {
              const formattedValue = formatCardNumber(e.target.value);
              setFieldValue("cardinfo", formattedValue);
            }}
            onBlur={handleBlur}

            onFocus={(e) => setFocus(e.target.name)}
          />
               {errors.cardinfo && touched.cardinfo ? (
          <span style={{ color: "red" }}>{errors.cardinfo}</span>
        ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="cardholdername" className="block text-gray-700 font-medium">
            Card Holder Name
          </label>
          <input
            type="text"
            autoComplete="off"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={values.cardholdername}
            id="cardholdername"
            name="cardholdername"
             placeholder="Card Holder Name"
             
             onChange={handleChange}
             onBlur={handleBlur}

            onFocus={(e) => setFocus(e.target.name)}
          />
            {errors.cardholdername && touched.cardholdername ? (
          <span style={{ color: "red" }}>{errors.cardholdername}</span>
        ) : null}
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label htmlFor="expmonth" className="block text-gray-700 font-medium">
              Validity 
            </label>
            <input
              type="month"
              name="expmonth"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={values.expmonth}
              // value={values.expmonth ? formatMonth(values.expmonth) : ""}
              // onChange={handleFormattedChange}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={(e) => setFocus(e.target.name)}
            />
              {errors.expmonth && touched.expmonth ? (
          <span style={{ color: "red" }}>{errors.expmonth}</span>
        ) : null}
          </div>

          <div className="w-1/2">
            <label htmlFor="cvv" className="block text-gray-700 font-medium">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              maxLength={3}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={values.cvv}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={() => setFocus("cvc")}
            />
             {errors.cvv && touched.cvv ? (
          <span style={{ color: "red" }}>{errors.cvv}</span>
        ) : null}
          </div>
        </div>
        <div className="grid grid-cols-3  gap-5 pt-5">
        <button
          onClick={handleBack}
          className="btn"
          style={{ backgroundColor: "yellow", color: "Black" }}
        >
          Back
        </button>
        <div></div>
        <button className="btn" type="submit">
          Submit
        </button>
        </div>
      </form>
      
    </div>



    </div>
    </div>
    <div className="flex  flex-col justify-center">
    <div className="pl-1 pr-1 mr-30 ml-2"  >
        <Cards
          number={values.cardinfo}
          name={values.cardholdername}
          expiry={values.expmonth}
          cvc={values.cvv}
          focused={focus} 
        />
      </div>
      </div>
    </div>
    
  );
};

export default CreditCard;




// +++++++++++++++++++++++++++++++++

// import React, { useState } from "react";
// import "react-credit-cards/es/styles-compiled.css";
// import Cards from "react-credit-cards";

// // changes
// import { PaymentinfoSchema } from "../Schemas/PaymentinfoSchema";
// import { setPaymentDetails } from "../redux/slices/paymentSlice";

// import { useFormik } from "formik";
// import { useDispatch, useSelector } from "react-redux";

// const formatCardNumber = (value) => {
//   // Remove all non-numeric characters
//   const digitsOnly = value.replace(/\D/g, "");

//   // Format as "XXXX XXXX XXXX XXXX"
//   return digitsOnly.replace(/(\d{4})/g, "$1 ").trim();
// };

// // Format the stored value (YYYY-MM) to display in MM-YY format
// const formatMonth = (date) => {
//   if (!date) return "";
//   const [year, month] = date.split("-");
//   return `${month}-${year.slice(2)}`;  // Format as MM-YY
// };

// // Handle changes in the month input field (MM-YY format)
// const handleFormattedChange = (e, setFieldValue) => {
//   const { value, name } = e.target;

//   // Convert the MM-YY format back to YYYY-MM before passing to Formik's handleChange
//   const [month, year] = value.split("-");
//   const formattedValue = `20${year}-${month}`;  // Assuming the year is 20YY

//   // Use Formik's setFieldValue to update the value in Formik state
//   setFieldValue(name, formattedValue);
// };

// const CreditCard = ({ handleNext, handleBack }) => {
//   const dispatch = useDispatch();
//   const payment = useSelector((state) => state.payment);

//   const {
//     values,
//     errors,
//     touched,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//     setFieldValue,
//   } = useFormik({
//     initialValues: {
//       cardinfo: payment?.cardinfo || "",
//       cardholdername: payment?.cardholdername || "",
//       cvv: payment?.cvv || "",
//       expmonth: payment?.expmonth || "",
//     },
//     validationSchema: PaymentinfoSchema,
//     onSubmit: (values) => {
//       dispatch(setPaymentDetails(values));
//       handleNext();
//     },
//   });

//   const [focus, setFocus] = useState("");

//   return (
//     <div className="bg-white mx-auto h-8/10 w-5/6 flex rounded-2xl shadow-2xl overflow-hidden">
//       <div className="w-7/10 ">
//         <div className="flex flex-col items-center w-full">
//           <h1 className="text-xl font-bold text-gray-500 pt-4">
//             <i className="text-4xl font-serif">HashStudioz </i>
//             <br />
//             <span className="pl-12 font-sans">Technology</span>
//           </h1>
//         </div>
//         <div className="pt-8 pl-8">
//           <div className="flex flex-col items-center ">
//             <form
//               className="w-full max-w-md bg-white p-8 shadow-md rounded-lg"
//               onSubmit={handleSubmit}
//             >
//               <div className="mb-4">
//                 <label htmlFor="cardinfo" className="block text-gray-700 font-medium">
//                   Card Number
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={values.cardinfo}
//                   autoComplete="off"
//                   id="cardinfo"
//                   maxLength={19} // 16 digits + 3 spaces
//                   name="cardinfo"
//                   onChange={(e) => {
//                     const formattedValue = formatCardNumber(e.target.value);
//                     setFieldValue("cardinfo", formattedValue);
//                   }}
//                   onBlur={handleBlur}
//                   onFocus={(e) => setFocus(e.target.name)}
//                 />
//                 {errors.cardinfo && touched.cardinfo ? (
//                   <span style={{ color: "red" }}>{errors.cardinfo}</span>
//                 ) : null}
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="cardholdername"
//                   className="block text-gray-700 font-medium"
//                 >
//                   Card Holder Name
//                 </label>
//                 <input
//                   type="text"
//                   autoComplete="off"
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={values.cardholdername}
//                   id="cardholdername"
//                   name="cardholdername"
//                   placeholder="Card Holder Name"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   onFocus={(e) => setFocus(e.target.name)}
//                 />
//                 {errors.cardholdername && touched.cardholdername ? (
//                   <span style={{ color: "red" }}>{errors.cardholdername}</span>
//                 ) : null}
//               </div>

//               <div className="flex gap-4">
//                 <div className="w-1/2">
//                   <label htmlFor="expmonth" className="block text-gray-700 font-medium">
//                     Expiry Month
//                   </label>
//                   <input
//                     type="month"
//                     name="expmonth"
//                     className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     value={values.expmonth ? formatMonth(values.expmonth) : ""}
//                     onChange={(e) => handleFormattedChange(e, setFieldValue)}
//                     onBlur={handleBlur}
//                     onFocus={(e) => setFocus(e.target.name)}
//                   />
//                   {errors.expmonth && touched.expmonth ? (
//                     <span style={{ color: "red" }}>{errors.expmonth}</span>
//                   ) : null}
//                 </div>

//                 <div className="w-1/2">
//                   <label htmlFor="cvv" className="block text-gray-700 font-medium">
//                     CVV
//                   </label>
//                   <input
//                     type="text"
//                     name="cvv"
//                     maxLength={3}
//                     className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     value={values.cvv}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     onFocus={() => setFocus("cvc")}
//                   />
//                   {errors.cvv && touched.cvv ? (
//                     <span style={{ color: "red" }}>{errors.cvv}</span>
//                   ) : null}
//                 </div>
//               </div>
//               <div className="grid grid-cols-3 gap-5 pt-5">
//                 <button
//                   onClick={handleBack}
//                   className="btn"
//                   style={{ backgroundColor: "yellow", color: "Black" }}
//                 >
//                   Back
//                 </button>
//                 <div></div>
//                 <button className="btn" type="submit">
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col justify-center">
//         <div className="pl-1 pr-1 mr-30 ml-2">
//           <Cards
//             number={values.cardinfo}
//             name={values.cardholdername}
//             expiry={values.expmonth}
//             cvc={values.cvv}
//             focused={focus}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreditCard;
