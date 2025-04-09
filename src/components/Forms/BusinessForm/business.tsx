"use client";

import { Business } from "@/types";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import styles from "./business.module.css";

interface BusinessFormType {
  initialValues: Business | undefined;
  handleSubmit: (
    values: Business,
    { setSubmitting }: FormikHelpers<Business>
  ) => Promise<void>;
}

const emptyObject = { id: "0", name: "", location: "", type: "" };
export default function BusinessForm({
  initialValues,
  handleSubmit,
}: BusinessFormType) {
  const id = initialValues?.id;
  const businessObject = initialValues ?? emptyObject;
  console.log(initialValues, businessObject);

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>{`${
        id ? "Update" : "Add"
      } business`}</h1>
      <Formik
        initialValues={businessObject}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ isSubmitting, values }) => {
          console.log(values);
          return (
            <Form className={styles.formElement}>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel} htmlFor="name">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter business name"
                  className={styles.inputElement}
                />
                <ErrorMessage name="name" component="div" />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel} htmlFor="location">
                  Location
                </label>
                <Field
                  type="text"
                  name="location"
                  placeholder="Enter business location"
                  className={styles.inputElement}
                />
                <ErrorMessage name="location" component="div" />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel} htmlFor="type">
                  Type
                </label>
                <Field
                  type="text"
                  name="type"
                  placeholder="Enter business type"
                  className={styles.inputElement}
                />
                <ErrorMessage name="type" component="div" />
              </div>
              <button
                className={styles.buttonElement}
                type="submit"
                disabled={isSubmitting}
              >
                {id ? "Update" : "Add"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
