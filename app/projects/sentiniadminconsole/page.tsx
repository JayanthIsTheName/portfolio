"use client";
import React from "react";
import { HeroParallax } from "@/app/components/ui/hero-parallax";

export default function sentiniadminconsole(){
    const products = [
        {
          title: "Dashboard",
          link: "",
          thumbnail:
            "/sentiniadminconsole/dashboard.png",
        },
        {
          title: "Incentives",
          link: "",
          thumbnail:
            "/sentiniadminconsole/incentives.png",
        },
        {
          title: "messaging",
          link: "",
          thumbnail:
            "/sentiniadminconsole/messaging.png",
        },
       
        {
          title: "notifications",
          link: "",
          thumbnail:
            "/sentiniadminconsole/notifications.png",
        },
        {
          title: "products",
          link: "",
          thumbnail:
            "/sentiniadminconsole/products.png",
        },
        {
          title: "profile",
          link: "",
          thumbnail:
            "/sentiniadminconsole/profile.png",
        },
       
        {
          title: "users",
          link: "",
          thumbnail:
            "/sentiniadminconsole/users.png",
        },
        {
          title: "Dashboard",
          link: "",
          thumbnail:
            "/sentiniadminconsole/dashboard.png",
        },
        {
          title: "Incentives",
          link: "",
          thumbnail:
            "/sentiniadminconsole/incentives.png",
        },
        {
          title: "messaging",
          link: "",
          thumbnail:
            "/sentiniadminconsole/messaging.png",
        },
       
        {
          title: "notifications",
          link: "",
          thumbnail:
            "/sentiniadminconsole/notifications.png",
        },
        {
          title: "products",
          link: "",
          thumbnail:
            "/sentiniadminconsole/products.png",
        },
        {
          title: "profile",
          link: "",
          thumbnail:
            "/sentiniadminconsole/profile.png",
        },
       
        {
          title: "users",
          link: "",
          thumbnail:
            "/sentiniadminconsole/users.png",
        },
        
      ];
    return (
        <div>
            <HeroParallax products={products} />
        </div>
    )
}