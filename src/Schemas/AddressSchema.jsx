import * as Yup from "yup";

export const AddressSchema = Yup.object({
  village: Yup.string()
  .trim()
  .matches(/^[A-Za-z0-9\s]+$/, "Village name must only contain letters, numbers, and spaces")
  .matches(/^\S(.*\S)?$/, "Village name cannot start or end with spaces, and cannot contain consecutive spaces")
  .required("Village name is required"),
  state: Yup.string()
  .matches(/^[A-Za-z\s&]+$/, "State name must only contain letters, spaces, and '&' symbol")
  .matches(/^\S(.*\S)?$/, "State name cannot start or end with spaces, and cannot contain consecutive spaces")
  .required("State is required")
  .trim(),
  city: Yup.string()
  .matches(/^[A-Za-z\s]+$/, "City name must only contain letters and spaces")
  .matches(/^\S+$/, "Name cannot contain spaces")
  .required("City is required")
  .trim(),
  nationality: Yup.string()
  .matches(/^[A-Za-z\s]+$/, "Nationality must only contain letters and spaces")
  .matches(/^\S+$/, "Name cannot contain spaces")
  .required("Nationality is required")
  .trim()
});
