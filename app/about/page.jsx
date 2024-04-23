"use client"
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import { gsap } from "gsap";
// import Splitting from "splitting";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Page() {
  const heroParagraphRef = useRef(null);
  const heroBackgroundRef = useRef(null);
  const [imageVisible, setImageVisible] = useState(true);

  useEffect(() => {
    const initLenis = () => {
      const lenis = new Lenis({
        lerp: 0.05,
        smoothWheel: true,
      });

      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      initScroll();
    };

    const initScroll = () => {
      if (heroParagraphRef.current) {
        const words = heroParagraphRef.current.querySelectorAll(".word");
        gsap.from(words, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: heroParagraphRef.current,
            start: "top bottom-=200",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    };

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      initLenis();

      // Dynamically import Splitting only in the browser environment
      import("splitting").then((Splitting) => {
        if (heroParagraphRef.current) {
          Splitting.default({ target: heroParagraphRef.current, by: "words" });
        }
      });
    }
  }, []);

  // useEffect(() => {
  //   if(typeof window !== "undefined") {

  //     if (heroParagraphRef.current) {
  //       Splitting({ target: heroParagraphRef.current, by: "words" });
  //     }
  //   }
  // }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      gsap.set(heroBackgroundRef.current, { autoAlpha: 1 });

      ScrollTrigger.create({
        trigger: heroParagraphRef.current,
        start: "top top",
        end: "bottom bottom",
        onEnter: () => {
          gsap.to(heroBackgroundRef.current, { autoAlpha: 0 });
          setImageVisible(false);
        },
        onLeaveBack: () => {
          gsap.to(heroBackgroundRef.current, { autoAlpha: 1 });
          setImageVisible(true);
        },
        onUpdate: (self) => {
          gsap.to(heroBackgroundRef.current, {
            scale: self.direction === -1 ? 1.2 : 1,
          });
        },
      });
    }
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.hero_wrapper}>
        <div
          className={styles.hero_paragraph}
          ref={heroParagraphRef}
          style={{ color: imageVisible ? "white" : "black" }}
        >
          <p className={styles.hero_paragraph_text}>
            Sonniq Hill was established in 2022 by Kalu Anya, as a pioneering
            music label dedicated to fostering innovation and nurturing emerging
            talent. Driven by a relentless pursuit of artistic excellence,
            Sonniq Hill is more than just a record label it's a community of
            like-minded individuals united by a shared love for music.
          </p>
        </div>
      </div>

      <div className={styles.hero_background} ref={heroBackgroundRef}>
        <img
          src="images/pap.jpg"
          alt=""
          className={styles.hero_background_image}
        />
      </div>
    </div>
  );
}
