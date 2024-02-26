"use client";
import styles from "./styles.module.css"
import React from "react";

import { ParallaxScroll } from "../../components/ui/parallax-scroll";

export default function sentiniapp() {
    const images = [
        "/catalog.png",
        "/createsale.png",
        "/dashboard.png",
        "/home.png",
        "/ledger.png",
        "/profile.png",
        "/purchaseregister.png",
        "/getmoney.png"
      ];
    let h = document.documentElement.clientHeight/1.5
    return (
        <div>
            <div className={styles.sentini_app} >
                
                    <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                        Sentini Mobile App
                    </p>
                    <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                        This is the sentini mobile app
                    </p>
                
                
            </div>
            <p className="text-center text-[30px]">Slides</p>
            <ParallaxScroll images={images} />
        </div>
    )
}