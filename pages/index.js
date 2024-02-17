import Head from "next/head";
import { useEffect } from "react";
import HomeFive from "./home-05";

export default function Home() {
  useEffect(() => {
    const header = document.querySelector("header.ax-header");

    const handleStickyClass = () => {
      if (window.pageYOffset > 250) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleStickyClass);

    return () => {
      window.removeEventListener("scroll", handleStickyClass);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Keystroke Creative Agency Bootstrap 5 Template</title>
      </Head>
      <div className="main-content">
        <div className="wrapper position-relative">
          <main className="pv-page-wrapper">
            <HomeFive />
          </main>
        </div>
      </div>
    </>
  );
}
