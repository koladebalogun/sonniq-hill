"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import anime from "animejs";
import Link from "next/link";

export default function HomeBanner() {
  useEffect(() => {
    
    const startLoader = () => {
      if (typeof window !== 'undefined') {
        let counterElement = document.querySelector(".count p");
        let currentValue = 0;

        const updateCounter = () => {
          if (currentValue < 100) {
            let increment = Math.floor(Math.random() * 10) + 1;
            currentValue = Math.min(currentValue + increment, 100);
            counterElement.textContent = currentValue;

            let delay = Math.floor(Math.random() * 200) + 25;
            setTimeout(updateCounter, delay);
          }
        };

        updateCounter();
      }
    };

    startLoader();

    gsap.to(".count", { opacity: 0, delay: 3.5, duration: 0.5 });

    if (typeof window !== 'undefined') {
      let textWrapper = document.querySelector(".ml16");
      
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    }

    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml16 .letter",
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el, i) => 30 * i,
      })
      .add({
        targets: ".ml16 .letter",
        translateY: [0, 100],
        easing: "easeOutExpo",
        duration: 3000,
        delay: (el, i) => 2000 + 30 * i,
      });

    gsap.to(".pre-loader", {
      scale: 0.5,
      ease: "power4.inOut",
      duration: 2,
      delay: 3,
    });

    gsap.to(".loader", {
      height: 0,
      ease: "power4.inOut",
      duration: 1.5,
      delay: 3.75,
    });
    gsap.to(".loader-bg", {
      height: 0,
      ease: "power4.inOut",
      duration: 1.5,
      delay: 4,
    });

    gsap.to(".loader-2", {
      height: 0,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 3.7,
    });

    gsap.from(".header h1", {
      y: 200,
      ease: "power4.inOut",
      duration: 1.5,
      delay: 3.75,
      stagger: 0.05,
    });

    gsap.to(".img", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 4.5,
      stagger: 0.25,
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="pre-loader">
          <div className="loader"></div>
          <div className="loader-bg"></div>
        </div>

        <div className="loader-content">
          <div className="count">
            <p>0</p>
          </div>
          <div className="copy">
            <p className="ml16">Soniq Hill</p>
          </div>
        </div>
        <div className="loader-2"></div>
      </div>

      

      <div className="site-content">
        <div className="header">
          <h1>S</h1>
          <h1>O</h1>
          <h1>N</h1>
          <h1>I</h1>
          <h1>Q</h1>
          <h1>H</h1>
          <h1>I</h1>
          <h1>L</h1>
          <h1>L</h1>
        </div>

        <footer>
          <div className="footer-copy">
            <p>
              KALU ANYA
              <br />
              SONIQ HILL LIMITED
              <br />
              kalu@soniqhill.com
              <br />
              +44 7823 518926
            </p>
          </div>

          <div className="footer-nav">
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
          </div>
        </footer>
      </div>
    </>
  );
}
