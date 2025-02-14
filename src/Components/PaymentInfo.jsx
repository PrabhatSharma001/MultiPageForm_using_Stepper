import { useFormik } from "formik";
import { PaymentinfoSchema } from "../Schemas/PaymentinfoSchema";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentDetails } from "../redux/slices/paymentSlice";
import CreditCard from './CreditCard'

const formatCardNumber = (value) => {
  // Remove all non-numeric characters

  const digitsOnly = value.replace(/\D/g, "");

  // Format as "XXXX XXXX XXXX XXXX"
  return digitsOnly.replace(/(\d{4})/g, "$1 ").trim();
};

const PaymentInfo = ({ handleNext, handleBack }) => {
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
      securitycode: payment?.securitycode || "",
      expmonth: payment?.expmonth || "",
      expyear: payment?.expyear || "",
    },
    validationSchema: PaymentinfoSchema,

    onSubmit: (values) => {
      dispatch(setPaymentDetails(values));
      // console.log("values of payment is ", payment);
      handleNext();
      // here to add swap properties
    //   setSwalProps({
    //     show: true,
    //     title: 'Success!',
    //     text: 'Congratulations form has been submitted successfully',
    //     icon: 'success',
    //     showConfirmButton: true,
    // });
    },
  });

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
        <div className="p-8">
        <span>
            <h2 className="font-serif text-2xl opacity-50 font-bold">
              User's Payment Details
            </h2>
          </span>
     
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col pt-2 ">
        <label htmlFor="cardinfo"  className="opacity-70 pb-1">Card Number*</label>
        <input
          className="border border-gray-400 rounded p-2"
          type="text"
          autoComplete="off"
          id="cardinfo"
          name="cardinfo"
          value={values.cardinfo}
          maxLength={19} // 16 digits + 3 spaces
          onChange={(e) => {
            const formattedValue = formatCardNumber(e.target.value);
            setFieldValue("cardinfo", formattedValue);
          }}
          onBlur={handleBlur}
        />{" "}
        {errors.cardinfo && touched.cardinfo ? (
          <span style={{ color: "red" }}>{errors.cardinfo}</span>
        ) : null}
        </div>
       <div className="flex flex-col pt-2 ">
        <label htmlFor="cvv" className="opacity-70 pb-1" >Security Code*</label>
        <input
         className="border border-gray-400 rounded p-2"
          type="text"
          autoComplete="off"
          id="securitycode"
          name="securitycode"
          value={values.securitycode}
          placeholder="CVV"
          style={{ textAlign: "center", fontFamily: "cursive" }}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        {errors.securitycode && touched.securitycode ? (
          <span style={{ color: "red" }}>{errors.securitycode}</span>
        ) : null}
        </div>
        <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col pt-2 ">
        <label htmlFor="expmonth" className="opacity-70 pb-1">Exp. Month*</label>
        <input
         className="border border-gray-400 rounded p-2"
          type="number"
          placeholder="MM"
          style={{ textAlign: "center" }}
          min={1}
          max={12}
          autoComplete="off"
          id="expmonth"
          name="expmonth"
          value={values.expmonth}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.expmonth && touched.expmonth ? (
          <span style={{ color: "red" }}>{errors.expmonth}</span>
        ) : null}
        </div>
        <div className="flex flex-col pt-2 ">
        <label htmlFor="expyear" className="opacity-70 pb-1" >Exp. Year*</label>
        <input
         className="border border-gray-400 rounded p-2"
          type="number"
          placeholder="YYYY"
          style={{ textAlign: "center" }}
          max={2035}
          min={2022}
          autoComplete="off"
          id="expyear"
          name="expyear"
          value={values.expyear}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.expyear && touched.expyear ? (
          <span style={{ color: "red" }}>{errors.expyear}</span>
        ) : null}
        </div>
        </div>
 {/* ++++++++++++++++++++++ Alert component +++++++++++++++++++++++++++++++++++++++++++ */}
    {/* <SweetAlert2 {...swalProps} /> */}
{/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
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
      <div  className="w-1/2 bg-cover bg-center bg-no-repeat shadow-lg App"
        ><CreditCard /></div>
    </div>
  );
};

export default PaymentInfo;
