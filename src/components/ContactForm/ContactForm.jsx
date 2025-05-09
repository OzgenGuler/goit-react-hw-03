import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { nanoid } from "nanoid";

const ContactForm = ({ onAddContact }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Enter your first and Last name !"),
      number: Yup.string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, "Format: 123-45-67")
        .required("Enter your number !"),
    }),
    onSubmit: (values, { resetForm }) => {
      onAddContact(values);
      resetForm();
    },
  });
  const handleNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 3 && value.length <= 5) {
      value = value.slice(0, 3) + "-" + value.slice(3);
    } else if (value.length > 5) {
      value =
        value.slice(0, 3) + "-" + value.slice(3, 5) + "-" + value.slice(5, 7);
    }
    formik.setFieldValue("number", value);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        marginBottom: "20px",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <div>
        <label>Name</label>
        <br />
        <input
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        )}
      </div>
      <div>
        <label>Number</label>
        <br />
        <input
          name="number"
          type="text"
          onChange={handleNumberChange}
          value={formik.values.number}
        />
        {formik.touched.name && formik.errors.name && (
          <div style={{ color: "red" }}>{formik.errors.number}</div>
        )}
      </div>
      <button
        type="submit"
        style={{
          marginTop: "15px",
          backgroundColor: "white",
          color: "black",
        }}
      >
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
