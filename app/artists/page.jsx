"use client";
import { useRef } from "react";
import styles from "./styles.module.css";
import Picture1 from "../../public/images/ARTWORK1.JPG";
import Picture2 from "../../public/images/papi1.jpg";
import Picture3 from "../../public/images/papi2.JPG";

import Picture4 from "../../public/images/ARTWORK2.jpeg";
import Picture5 from "../../public/images/bn.jpeg";
import Picture6 from "../../public/images/bob.jpeg";

import Picture7 from "../../public/images/ARTWORK3.jpeg";
import Picture8 from "../../public/images/sole.jpeg";
import Picture9 from "../../public/images/sole1.jpeg";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const word = "with framer-motion";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const image1 = [
    {
      src: Picture1,
      y: 0,
    },
    {
      src: Picture2,
      y: lg,
    },
    {
      src: Picture3,
      y: md,
    },
  ];

  const image2 = [
    {
      src: Picture4,
      y: 0,
    },
    {
      src: Picture5,
      y: lg,
    },
    {
      src: Picture6,
      y: md,
    },
  ];

  const image3 = [
    {
      src: Picture7,
      y: 0,
    },
    {
      src: Picture8,
      y: lg,
    },
    {
      src: Picture9,
      y: md,
    },
  ];

  const Body = ({ header, header2, images, body }) => {
    return (
      <div ref={container} className={styles.container}>
        <div className={`${styles.body} ${body}`}>
          <motion.h1 style={{ y: sm }}>{header}</motion.h1>
          <h1>{header2}</h1>
          {/* <div className={styles.word}>
            <p>
              {word.split("").map((letter, i) => {
                const y = useTransform(
                  scrollYProgress,
                  [0, 1],
                  [0, Math.floor(Math.random() * -75) - 25]
                );
                return (
                  <motion.span style={{ top: y }} key={`l_${i}`}>
                    {letter}
                  </motion.span>
                );
              })}
            </p>
          </div> */}
        </div>
        <div className={styles.images}>
          {images.map(({ src, y }, i) => {
            console.log(src);
            return (
              <motion.div
                style={{ y }}
                key={`i_${i}`}
                className={styles.imageContainer}
              >
                <Image
                  src={src}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,LkNKFyof~qWBofWBWBof~qj[9Fj["
                  alt="image"
                  fill
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div ref={container} className={styles.container}>
      <Body header="don papi" images={image1} body="body" />
      <Body header="famous"  header2="bobson" images={image2} body="body2" />
      <Body header="atee" header2="sole" images={image3} body="body3" />
    </div>
  );
}
