import * as Yup from "yup";
// const currentYear = new Date().getFullYear();
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;

export const PaymentinfoSchema =Yup.object({
  cardinfo: Yup.string()
  .length(19, "Card number must be exactly 16 digits")
  // .matches(/^\d{16}$/, "Card number must only contain digits")
  .required("Card details are required"),

    // make changes below
    cardholdername: Yup.string()
        .trim()
        .min(3, "Minimun 3 character required")
        .max(15, "Maximum 15 characters can be filled")
        .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, "Name must contain only alphabets with a single space between words")
        .required("Name is required "),
        // till here
        cvv: Yup.string()
        .length(3, "Security code must be exactly 3 digits")
          .matches(/^\d{3}$/, "Security code must only contain digits")
          .required("Security code is required"),


        expmonth: Yup.string()
        .matches(/^(0[1-9]|1[0-2])-(\d{2})$/, "Invalid format (YYYY-MM)")
        .required("Expiry date is required")
        .test("valid-date", "Expiry date must be in the future", (value) => {
          if (!value) return false;
          const [year, month] = value.split("-").map(Number);
          return year > currentYear || (year === currentYear && month >= currentMonth);
        }),
  // comment this below 

  // expyear: Yup.string()
  // .matches(/^\d{4}$/, "Year must be a 4-digit number")
  // .test(
  //   "year-validity",
  //   `Year cannot be earlier than ${currentYear}`,
  //   (value) => parseInt(value) >= currentYear
  // )
  // .required("Expiry year is required")
});
