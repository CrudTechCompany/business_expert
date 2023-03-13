import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "./ServiceBlock.module.css";
import { content, paginationContent } from "./content";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useRef, useState } from "react";

const ServiceBlock = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const splideRef = useRef(null);
  const handlerPrevButton = async () => {
    if (currentIndex === 0) {
      return;
    } else {
      await splideRef.current.splide.go(splideRef.current.splide.index - 1);
      setCurrentIndex(splideRef.current.splide.index);
    }
  };
  const handleNextButton = async () => {
    if (currentIndex === 3) {
      return;
    } else {
      await splideRef.current.splide.go(splideRef.current.splide.index + 1);
      setCurrentIndex(splideRef.current.splide.index);
    }
  };
  const handlerPagination = async (index) => {
    if (currentIndex === index) {
      return;
    } else {
      await splideRef.current.splide.go(index);
      setCurrentIndex(splideRef.current.splide.index);
    }
  };
  return (
    <div className={styles["service-block"]}>
      <h4>Услуги бизнес-инкубатора</h4>
      <h3>Мы предлагаем комплексные услуги по релокации бизнеса в Польшу</h3>
      <div className={styles["splide-block"]}>
        <Splide
          ref={splideRef}
          hasTrack={false}
          options={{
            arrows: false,
            pagination: false,
            type: "slide",
            rewind: false,
            width: "100%",
            height: "max-content",
            start: 0,
            gap: "60px",
            drag: true,
            waitForTransition: true,
            breakpoints: {
              6000: {
                perPage: 2,
                perMove: 1,
              },
            },
          }}
        >
          <SplideTrack>
            {content.map((el) => (
              <SplideSlide key={el.key}>
                <ServiceCard
                  image={el.image}
                  title={el.title}
                  desc={el.desc}
                  link={el.link}
                />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </div>
      <div className={styles["nav-block"]}>
        <div className={styles["nav-content-block"]}>
          <button className={styles["nav-button"]} onClick={handlerPrevButton}>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5001 10.5001C17.5001 10.6659 17.4342 10.8248 17.317 10.942C17.1998 11.0593 17.0409 11.1251 16.8751 11.1251H4.63291L9.19541 15.6798C9.31277 15.7983 9.37861 15.9583 9.37861 16.1251C9.37861 16.2919 9.31277 16.4519 9.19541 16.5704C9.07595 16.6859 8.91627 16.7505 8.7501 16.7505C8.58392 16.7505 8.42425 16.6859 8.30479 16.5704L2.67979 10.9454C2.56242 10.8269 2.49658 10.6669 2.49658 10.5001C2.49658 10.3333 2.56242 10.1733 2.67979 10.0548L8.30479 4.42979C8.42622 4.33012 8.58038 4.27919 8.73729 4.2869C8.8942 4.2946 9.04263 4.3604 9.15372 4.47148C9.2648 4.58256 9.3306 4.731 9.3383 4.8879C9.34601 5.04481 9.29507 5.19898 9.19541 5.32041L4.63291 9.8751H16.8751C17.0409 9.8751 17.1998 9.94095 17.317 10.0582C17.4342 10.1754 17.5001 10.3343 17.5001 10.5001Z"
                fill={
                  currentIndex === 0
                    ? "rgba(226, 226, 226, 1)"
                    : "rgba(5, 5, 5, 1)"
                }
              />
            </svg>
            <span
              style={{
                color:
                  currentIndex === 0
                    ? "rgba(226, 226, 226, 1)"
                    : "rgba(5, 5, 5, 1)",
              }}
            >
              Предыдущая
            </span>
          </button>
          <div className={styles["pagination-block"]}>
            {paginationContent.map((el) => (
              <button
                onClick={() => handlerPagination(el.index)}
                key={el.key}
                className={styles["pagination-item"]}
                style={{
                  backgroundColor:
                    currentIndex === el.index
                      ? "rgba(255, 0, 0, 1)"
                      : "rgba(226, 226, 226, 1)",
                }}
              />
            ))}
          </div>
          <button className={styles["nav-button"]} onClick={handleNextButton}>
            <span
              style={{
                color:
                  currentIndex === 3
                    ? "rgba(226, 226, 226, 1)"
                    : "rgba(5, 5, 5, 1)",
              }}
            >
              Следующая
            </span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.3203 10.9454L11.6953 16.5704C11.5758 16.6859 11.4162 16.7505 11.25 16.7505C11.0838 16.7505 10.9242 16.6859 10.8047 16.5704C10.6873 16.4519 10.6215 16.2919 10.6215 16.1251C10.6215 15.9583 10.6873 15.7983 10.8047 15.6798L15.3672 11.1251H3.125C2.95924 11.1251 2.80027 11.0593 2.68306 10.942C2.56585 10.8248 2.5 10.6659 2.5 10.5001C2.5 10.3343 2.56585 10.1754 2.68306 10.0582C2.80027 9.94095 2.95924 9.8751 3.125 9.8751H15.3672L10.8047 5.32041C10.705 5.19898 10.6541 5.04481 10.6618 4.8879C10.6695 4.731 10.7353 4.58256 10.8464 4.47148C10.9575 4.3604 11.1059 4.2946 11.2628 4.2869C11.4197 4.27919 11.5739 4.33012 11.6953 4.42979L17.3203 10.0548C17.4377 10.1733 17.5035 10.3333 17.5035 10.5001C17.5035 10.6669 17.4377 10.8269 17.3203 10.9454Z"
                fill={
                  currentIndex === 3
                    ? "rgba(226, 226, 226, 1)"
                    : "rgba(5, 5, 5, 1)"
                }
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlock;
