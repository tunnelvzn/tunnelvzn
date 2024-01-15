import { useRouter } from "next/router";
import { useState, useEffect, useContext, useRef } from "react";
import stories from "../../data/stories.json";
import NavBar from "../../comps/NavBar";
import Footer from "../../comps/Footer";
import styles from "./StoryContent.module.scss";
import Image from "next/image";
import { GlobalContext } from "../../comps/Global/useGlobalContext";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Loneliness } from "./Loneliness";
import { Anxiety } from "./Anxiety";
import { Envy } from "./Envy";
import { Burnout } from "./Burnout";
import { Epilogue } from "./Epilogue";
const StoryContent = () => {
  const {
    intro,
    setIntro,
    audio,
    route,
    setRoute,
    setNav,
    storyName,
    setMainNav,
  } = useContext(GlobalContext);
  const router = useRouter();
  const totalPage = 13;
  const containerRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);

//   const handleScroll = () => {
//     console.log("scroll");
//     let pageHeights = [];
//     if (typeof window !== "undefined") {
//       pageHeights = Array.from(
//         { length: totalPage },
//         (_, i) => i * window.innerHeight
//       );
//     }
//     const { scrollTop } = document.documentElement;
//     const nextPage =
//       pageHeights.findIndex(
//         (height, i) =>
//           scrollTop >= height && scrollTop < (pageHeights[i + 1] || Infinity)
//       ) + 1;

//     if (nextPage !== currentPage) {
//       setCurrentPage(nextPage);
//     }
//   };

  console.log(storyName);
  let renderComponent;
  switch (storyName) {
    case "Loneliness":
      renderComponent = <Loneliness />;
      break;
    case "Anxiety":
      renderComponent = <Anxiety />;
      break;
    case "Envy":
      renderComponent = <Envy />;
      break;
    case "Burnout":
      renderComponent = <Burnout />;
      break;
    case "Epilogue":
      renderComponent = <Epilogue />;
      break;
  }

  return (
    <div>
      <div>
        <div>
          <button
            className={`${styles.return}`}
            onClick={() => {
              setRoute("/");
              sessionStorage.setItem("route", "/");
              router.push("/");
              console.log("push route");
              setMainNav(true);
              setNav(false);
            }}
          >
            <span className={`${styles.returnIcon}`}>
              <Icon
                icon="akar-icons:arrow-back"
                color="#212121"
                width={28}
                height={28}
              />
            </span>
          </button>
        </div>

        {/* <span
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            zIndex: "999",
          }}
        >
          {" "}
          Page {currentPage}/{totalPage}{" "}
        </span> */}
      </div>

      <section className={`${styles.arrow} ${styles.bounce} text-center`}>
        <h6>Scroll Down</h6>
        <h1 className={styles.theArrow}>▿</h1>
      </section>
      <div ref={containerRef}>{renderComponent}</div>
    </div>
  );
};

export default StoryContent;
