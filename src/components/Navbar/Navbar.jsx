import React from "react";
import s from "./Navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/favicon.png"

const Navbar = () => {
    return <div className={s.wrapper}>
        {/* <div className={s.logo_box}>
            <Image className={s.logo} src={logo} />
        </div> */}
        <div className={s.home_box}>
            <Link className={s.home} href={"/pages/main"}>
                <p >Home</p>
            </Link>
            <Link className={s.home} href={"/pages/news"}>
                <p >News</p>
            </Link>
            <Link className={s.home} href={"/pages/profile"}>
                <p >Profile</p>
            </Link>
        </div>
    </div>;
};

export default Navbar;
