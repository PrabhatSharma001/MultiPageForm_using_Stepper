import React from "react";
import * as Yup from "yup";

 export const UserDetailsSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, "Minimun 3 character required")
    .max(15, "Maximum 15 characters can be filled")
    .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, "Name must contain only alphabets with a single space between words")
    .required("Name is required "),
  mobile: Yup.string()
  .matches(/^(\+9+\s?)?[6-9]\d{9}$/, "Invalid mobile number")
    .required("Mobile number is required"),
  email: Yup.string()
  .matches(
    /^(?!\d)(?!.*\.\.)[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/,
    "Please enter a valid email address. Only Gmail and Yahoo domains are allowed. The email cannot start with a number or contain consecutive dots."
  )
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
  .min(4, "Password must be at least 8 characters long")
  .max(20, "Password must not exceed 20 characters")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/\d/, "Password must contain at least one number")
  .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
  .matches(/^\S*$/, "Password cannot contain spaces")
  .required("Password is required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "password must match")
    .required("confirm password is required"),
});
