import * as Yup from "yup";
const currentYear = new Date().getFullYear()
export const PaymentinfoSchema =Yup.object({
  cardinfo: Yup.string()
  .length(19, "Card number must be exactly 16 digits")
  // .matches(/^\d{16}$/, "Card number must only contain digits")
  .required("Card details are required"),
  securitycode: Yup.string()
  .length(3, "Security code must be exactly 3 digits")
    .matches(/^\d{3}$/, "Security code must only contain digits")
    .required("Security code is required"),
  expmonth: Yup.string()
  .matches(/^(0[1-9]|1[0-2])$/, "Month must be between 01 and 12")
  .required("Expiry month is required"),
  expyear: Yup.string()
  .matches(/^\d{4}$/, "Year must be a 4-digit number")
  .test(
    "year-validity",
    `Year cannot be earlier than ${currentYear}`,
    (value) => parseInt(value) >= currentYear
  )
  .required("Expiry year is required")
});
