import React from "react";
import s from "./Navbar.module.css"
import Link from "next/link";

const Navbar = () => {
    return <div className={s.wrapper}>
        <Link className={s.home} href={"/pages/main"}>
            <p >Home</p>
        </Link>
        <Link className={s.home} href={"/pages/news"}>
            <p >News</p>
        </Link>
        <Link className={s.home} href={"/pages/profile"}>
            <p >Profile</p>
        </Link>
    </div>;
};

export default Navbar;
