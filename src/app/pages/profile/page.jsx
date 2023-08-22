import React from "react";
import s from "./page.module.css"
import Image from "next/image";

import btc from '../../../assets/bitcoin.png'
import ether from "../../../assets/ethereum.png"
import dollar from "../../../assets/dollar.png"
import Navbar from "@/components/Navbar/Navbar";
import { BsFillFileArrowDownFill } from "react-icons/bs"
import { BiSolidPurchaseTag } from "react-icons/bi"
import { GiTrade } from "react-icons/gi"


const Home = () => {
    return <div className={s.wrapper}>
        <div className={s.header}>
            <h1>My Wallets</h1>
        </div>
        <div className={s.main}>
            <div className={s.box_dollar}>
                <Image src={dollar} alt="dollar" className={s.currency} />
                <h1>Dollars</h1>
                <p className={s.price}><strong>$ 10,325</strong></p>
                <p className={s.price_for_dollar}><strong>= 970,550₽</strong></p>
                <div className={s.btns_box}>
                    <div className={s.btn_box}>
                        <BsFillFileArrowDownFill className={s.send_btn} size={45} />
                        <p>Send</p>
                    </div>
                    <div className={s.btn_box}>
                        <BsFillFileArrowDownFill className={s.inside_btn} size={45} />
                        <p>Receive</p>
                    </div>
                    <div className={s.btn_box}>
                        <BiSolidPurchaseTag className={s.buy_btn} size={45} />
                        <p>Buy</p>
                    </div>
                    <div className={s.btn_box}>
                        <GiTrade size={45} />
                        <p>Trade</p>
                    </div>
                </div>
            </div>
            <div className={s.box_btc}>
                <Image src={btc} alt="btc" className={s.currency} />
                <h1>Bitcoin</h1>
                <p className={s.price}><strong>₿ 2,32534</strong></p>
                <p className={s.price_for_btc}><strong>= 5,639,151₽</strong></p>
                <div className={s.btns_box}>
                    <div className={s.btn_box}>
                        <BsFillFileArrowDownFill className={s.send_btn} size={45} />
                        <p>Send</p>
                    </div>
                    <div className={s.btn_box}>
                        <BsFillFileArrowDownFill className={s.inside_btn} size={45} />
                        <p>Receive</p>
                    </div>
                    <div className={s.btn_box}>
                        <BiSolidPurchaseTag className={s.buy_btn} size={45} />
                        <p>Buy</p>
                    </div>
                    <div className={s.btn_box}>
                        <GiTrade size={45} />
                        <p>Trade</p>
                    </div>
                </div>
            </div>
            <div className={s.box_ether}>
                <Image src={ether} alt="ether" className={s.currency} />
                <h1>Ethereum</h1>
                <p className={s.price}><strong>ETH 1,32534</strong></p>
                <p className={s.price_for_ether}><strong>= 970,550₽</strong></p>
                <div className={s.btns_box}>
                    <div className={s.btn_box}>
                        <BsFillFileArrowDownFill className={s.send_btn} size={45} />
                        <p>Send</p>
                    </div>
                    <div className={s.btn_box}>
                        <BsFillFileArrowDownFill className={s.inside_btn} size={45} />
                        <p>Receive</p>
                    </div>
                    <div className={s.btn_box}>
                        <BiSolidPurchaseTag className={s.buy_btn} size={45} />
                        <p>Buy</p>
                    </div>
                    <div className={s.btn_box}>
                        <GiTrade size={45} />
                        <p>Trade</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Home;

