"use client"
import React, { useState } from "react";
import s from "./Main.module.css"
import { FiUserCheck } from "react-icons/fi"
import { RiLockPasswordLine } from "react-icons/ri"
import { BiSolidShow } from "react-icons/bi"
import Link from "next/link";

const Main = () => {

  const [passwordShown, setPasswordShown] = useState(false)
  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  const handleSubmitForm = () => {

  }


  return (
    <div className={s.wrapper_main}>
      <div className={s.login_container}>
        <form onSubmit={handleSubmitForm}>
          <h1>Sign in</h1>
          <div className={s.login_box}>
            <FiUserCheck size={30} />
            <input type="text" placeholder="Login" required />
          </div>
          <div className={s.pswd_box}>
            <RiLockPasswordLine size={30} className={s.pswd_icn} />
            <input type={passwordShown ? "text" : "password"} placeholder="Password" required />
            <BiSolidShow onClick={togglePassword} size={22} className={s.show_icn} />
          </div>
          <div className={s.divBtn}>
            <Link href={"/pages/home"}>
              <button className={s.sign_in_btn}>Sign in</button>
            </Link>
          </div>
          <div className={s.sing_up}>
            <Link href={"/pages/signUp"}>
              <p>or sign up</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
};

export default Main;
