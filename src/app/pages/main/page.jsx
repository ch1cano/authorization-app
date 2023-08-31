"use client"
import React, { useState } from "react";
import s from "./page.module.css"
import { FiUserCheck } from "react-icons/fi"
import { RiLockPasswordLine } from "react-icons/ri"
import { BiSolidShow } from "react-icons/bi"
import Link from "next/link";
import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";

const Main = () => {

  const [passwordShown, setPasswordShown] = useState(false)
  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }


  const formik = useFormik({
    initialValues: {
      login: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const validate = (values) => {
    const errors = {};

    if (!values.login) {
      errors.login = "Login is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };


  return (
    <div className={s.wrapper_main}>
      <div className={s.login_container}>
        <Formik initialValues={{ login: "", password: "" }}
          validate={validate}
          onSubmit={({ setSubmitting }) => {
            console.log("Form is validated! Submitting the form...");
            setSubmitting(false);
          }} validateOnSubmit
          validateOnChange={false}>

          <Form noValidate onSubmit={formik.handleSubmit}>
            <h1>Sign in</h1>
            <div className={s.login_box}>
              <FiUserCheck size={30} />
              <Field name="login"
                type="text"
                placeholder="Login"
              />
              <ErrorMessage name="login" component="div" />
            </div>
            <div className={s.pswd_box}>
              <RiLockPasswordLine size={30} className={s.pswd_icn} />
              <Field name="password"
                type={passwordShown ? "text" : "password"}
                placeholder="Password" />
              <ErrorMessage name="password" component="div" />
              <BiSolidShow onClick={togglePassword} size={22} className={s.show_icn} />
            </div>
            <div className={s.divBtn}>
              <Link href={"/pages/profile"}>
                <button className={s.sign_in_btn}>Sign in</button>
              </Link>
            </div>
            <div className={s.sing_up}>
              <Link href={"/pages/signUp"}>
                <p>or sign up</p>
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
};

export default Main;
