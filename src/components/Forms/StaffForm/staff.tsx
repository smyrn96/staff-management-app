"use client";

import { Staff } from "@/types";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import styles from "./staff.module.css";

interface StaffFormType {
  initialValues: Staff | undefined;
  handleSubmit: (
    values: Staff,
    { setSubmitting }: FormikHelpers<Staff>
  ) => Promise<void>;
}

const emptyObject = {
  id: "0",
  email: "",
  firstName: "",
  lastName: "",
  position: "",
  businessId: "",
  phoneNumber: "",
};
export default function StaffForm({
  initialValues,
  handleSubmit,
}: StaffFormType) {
  const id = initialValues?.id;
  const staffMemberObject = initialValues ?? emptyObject;
  console.log(initialValues, staffMemberObject);

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>{`${
        id ? "Update" : "Add"
      } staff member`}</h1>
      <Formik
        initialValues={staffMemberObject}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ isSubmitting, values }) => {
          console.log(values);
          return (
            <Form className={styles.formElement}>
              <div className={styles.formInputContainer}>
                <div className={styles.inputWrapper}>
                  <label className={styles.inputLabel} htmlFor="email">
                    Email
                  </label>
                  <Field
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter staff member email"
                    className={styles.inputElement}
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className={styles.inputWrapper}>
                  <label className={styles.inputLabel} htmlFor="firstName">
                    First Name
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="Enter staff member name"
                    className={styles.inputElement}
                  />
                  <ErrorMessage name="firstName" component="div" />
                </div>
                <div className={styles.inputWrapper}>
                  <label className={styles.inputLabel} htmlFor="lastName">
                    Last Name
                  </label>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Enter staff member surname"
                    className={styles.inputElement}
                  />
                  <ErrorMessage name="lastName" component="div" />
                </div>
                <div className={styles.inputWrapper}>
                  <label className={styles.inputLabel} htmlFor="position">
                    Position
                  </label>
                  <Field
                    type="text"
                    name="position"
                    placeholder="Enter staff member position"
                    className={styles.inputElement}
                  />
                  <ErrorMessage name="position" component="div" />
                </div>
                <div className={styles.inputWrapper}>
                  <label className={styles.inputLabel} htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  <Field
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter staff member number"
                    className={styles.inputElement}
                  />
                  <ErrorMessage name="phoneNumber" component="div" />
                </div>
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
