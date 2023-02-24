import { content } from "./content.jsx";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import  "./carousel.css";
import "@splidejs/react-splide/css";

const CarouselBlock = ({ carouselRef }) => {
  return (
    <Splide
      id="carousel-block"
      ref={carouselRef}
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
        drag: false,
        waitForTransition: true,
        breakpoints: {
          1600: {
            perPage: 2,
          },
          1224: {
            perPage: 1,
          },
        },
      }}
    >
      <SplideTrack>
        {content.map((el) => (
          <SplideSlide>
            <ServiceCard
              key={el.title}
              image={el.image}
              title={el.title}
              desc={el.desc}
              link={el.link}
            />
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
};

export default CarouselBlock;
