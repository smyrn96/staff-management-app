"use client";

import { UserCredentials } from "@/types";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import styles from "./login.module.css";

interface LoginFormType {
  initialValues: UserCredentials;
  handleLogin: (
    values: UserCredentials,
    { setSubmitting }: FormikHelpers<UserCredentials>
  ) => Promise<void>;
  isInvalidCred: boolean;
}

export default function Login({
  initialValues,
  handleLogin,
  isInvalidCred,
}: LoginFormType) {
  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>Sign In</h1>
      <Formik initialValues={initialValues} onSubmit={handleLogin}>
        {({ isSubmitting }) => (
          <Form className={styles.formElement}>
            <Field
              type="email"
              name="email"
              placeholder="Enter email address"
              className={styles.inputElement}
            />
            <ErrorMessage name="email" component="div" />
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
              className={styles.inputElement}
            />
            <ErrorMessage name="password" component="div" />
            <button
              className="buttonElement"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </button>
            {isInvalidCred && (
              <div className="text-red-300 max-w-60">
                Email or password are incorrect. Please try again.
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
