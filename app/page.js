"use client"
import { useEffect } from "react";
import styles from "./page.module.css";
import HomeBanner from "./pages/Home/page";
import Lenis from '@studio-freight/lenis'


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={styles.main}>
      <HomeBanner />
    </main>
  );
}
