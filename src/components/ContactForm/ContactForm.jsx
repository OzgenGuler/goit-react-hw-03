import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const ContactForm = ({ addContact }) => {
  const formik = useFormik({
    initialValues: { name: "", number: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Enter your first and Last name !"),
      number: Yup.string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, "Format: 123-45-67")
        .required("Enter your number !"),
    }),
    handleSubmit({ values, resetForm }) {
      values.id = nanoid();
      addContact({ ...values });
      resetForm();
    },
  });

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
        {formik.errors.name && (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        )}
      </div>
      <div>
        <label>Number</label>
        <br />
        <input
          name="number"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
        {formik.errors.number && (
          <div style={{ color: "red" }}>{formik.errors.number}</div>
        )}
      </div>
      <button
        type="submit"
        style={{ marginTop: "15px", backgroundColor: "white", color: "black" }}
      >
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
