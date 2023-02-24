import { useRef, useState } from "react";
import CarouselBlock from "../CarouselBlock/CarouselBlock";
import styles from "./ServiceBlock.module.css";
import { content } from "./content.jsx";

const ServiceBlock = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const onClickPrevButtonHandler = async () => {
    if (currentIndex === 0) {
      return;
    } else {
      await carouselRef.current.splide.go(carouselRef.current.splide.index - 1);
      setCurrentIndex(carouselRef.current.splide.index);
    }
  };
  const onClickNextButtonHandler = async () => {
    if (currentIndex === carouselRef.current.splide.length - 2) {
      return;
    } else {
      await carouselRef.current.splide.go(carouselRef.current.splide.index + 1);
      setCurrentIndex(carouselRef.current.splide.index);
    }
  };
  const onClickPositionItemHandler = async (i) => {
    if (currentIndex === i) {
      return;
    } else {
      await carouselRef.current.splide.go(i);
      setCurrentIndex(i);
    }
  };
  return (
    <div className={styles["service-block"]} id="service-block">
      <div className={styles["title-block"]}>
        <h3>Услуги бизнес-инкубатора</h3>
        <h2>Мы предлагаем комплексные услуги по релокации бизнеса в Польшу</h2>
        <CarouselBlock carouselRef={carouselRef} />
        <div className={styles["nav-block"]}>
          <button
            className={styles["nav-button"]}
            onClick={() => onClickPrevButtonHandler()}
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 10.5001C17.5 10.6659 17.4341 10.8248 17.3169 10.942C17.1997 11.0593 17.0407 11.1251 16.875 11.1251H4.63279L9.19529 15.6798C9.31265 15.7983 9.37849 15.9583 9.37849 16.1251C9.37849 16.2919 9.31265 16.4519 9.19529 16.5704C9.07583 16.6859 8.91615 16.7505 8.74998 16.7505C8.5838 16.7505 8.42413 16.6859 8.30466 16.5704L2.67966 10.9454C2.5623 10.8269 2.49646 10.6669 2.49646 10.5001C2.49646 10.3333 2.5623 10.1733 2.67966 10.0548L8.30466 4.42979C8.4261 4.33012 8.58026 4.27919 8.73717 4.2869C8.89408 4.2946 9.04251 4.3604 9.15359 4.47148C9.26468 4.58256 9.33047 4.731 9.33818 4.8879C9.34589 5.04481 9.29495 5.19898 9.19529 5.32041L4.63279 9.8751H16.875C17.0407 9.8751 17.1997 9.94095 17.3169 10.0582C17.4341 10.1754 17.5 10.3343 17.5 10.5001Z"
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
          <div className={styles["nav-position-block"]}>
            {content.map((_, i) => (
              <button
                className={styles["position-item"]}
                style={{
                  backgroundColor:
                    i === currentIndex
                      ? "rgba(255, 0, 0, 1)"
                      : "rgba(226, 226, 226, 1)",
                }}
                onClick={() => onClickPositionItemHandler(i)}
              />
            ))}
          </div>
          <button
            className={styles["nav-button"]}
            onClick={onClickNextButtonHandler}
          >
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
