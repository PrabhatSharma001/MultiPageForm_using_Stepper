
import { useFormik } from "formik";
import { PaymentinfoSchema } from "../Schemas/PaymentinfoSchema";
import { useDispatch,useSelector } from "react-redux";
import { setPaymentDetails } from "../redux/slices/paymentSlice";

const formatCardNumber=(value)=>{
    // Remove all non-numeric characters
 
  const digitsOnly = value.replace(/\D/g, "");

    // Format as "XXXX XXXX XXXX XXXX"
    return digitsOnly.replace(/(\d{4})/g, "$1 ").trim();
}

const PaymentInfo = ({handleNext,handleBack}) => {

  const dispatch=useDispatch();
  const payment=useSelector((state)=>state.payment);

  const { values, errors,touched, handleBlur, handleChange, handleSubmit,setFieldValue} = useFormik({
    initialValues: {
    cardinfo: payment?.cardinfo||"",
    securitycode:payment?.securitycode|| "",
    expmonth:payment?.expmonth|| "",
    expyear: payment?.expyear||"",
    },
    validationSchema:PaymentinfoSchema,
    onSubmit: (values) => {
      dispatch(setPaymentDetails(values))
      console.log("values of payment is ",payment)
      handleNext();
     
    },
  });

  


  return (
    <div>
      
      <p>Payment Information</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardinfo">Card Number*</label>
        <input
          type="text"
          autoComplete="off"
          id="cardinfo"
          name="cardinfo"
          value={values.cardinfo}
          maxLength={19} // 16 digits + 3 spaces
          onChange={(e)=>{
            const formattedValue=formatCardNumber(e.target.value)
            setFieldValue("cardinfo", formattedValue);
          }}
          onBlur={handleBlur}
        />{" "}
        {errors.cardinfo && touched.cardinfo ? <span style={{color:"red"}}>{errors.cardinfo}</span>:null}
        <br />
        <br/>
        <label htmlFor="securitycode">Security Code*</label>
        <input
          type="text"
           autoComplete="off"
           id="securitycode"
           name="securitycode"
          value={values.securitycode}
          placeholder="CVV"
          style={{textAlign:"center",fontFamily:"cursive"}}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
         {errors.securitycode && touched.securitycode ? <span style={{color:"red"}}>{errors.securitycode}</span>:null}
        <br />
        <br />
        <label htmlFor="expmonth">Exp. Month*</label>
        <input
          type="number"
          placeholder="MM"
          style={{textAlign:"center"}}
          min={1}
          max={12}
           autoComplete="off"
           id="expmonth"
           name="expmonth"
          value={values.expmonth}
          onChange={handleChange}
          onBlur={handleBlur}
        />
         {errors.expmonth && touched.expmonth ? <span style={{color:"red"}}>{errors.expmonth}</span>:null}
        <br />
        <br />
        <label htmlFor="expyear">Exp. Year*</label>
        <input
          type="number"
          placeholder="YYYY"
          style={{textAlign:"center"}}
          max={2035}
          min={2022}
           autoComplete="off"
           id="expyear"
           name="expyear"
          value={values.expyear}
          onChange={handleChange}
          onBlur={handleBlur}
        />
         {errors.expyear && touched.expyear ? <span style={{color:"red"}}>{errors.expyear}</span>:null}
         <button onClick={handleBack} className="btn"
          style={{ backgroundColor: "yellow", color: "Black" }}>Back</button>
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PaymentInfo;
