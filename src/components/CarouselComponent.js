import Carousel from "react-bootstrap/Carousel";

function CarouselComponent() {
  return (
    <Carousel fade indicators={false} controls={false}>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          style={{
            backgroundSize: "cover",
            boxSizing: "inherit",
            backgroundImage: "img/1.jpg",
          }}
          className="d-block w-100"
          src="img/1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          style={{
            backgroundSize: "cover",
            boxSizing: "inherit",
            backgroundImage: "img/2.jpg",
          }}
          className="d-block w-100"
          src="img/2.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          style={{
            backgroundSize: "cover",
            boxSizing: "inherit",
            backgroundImage: "img/3.jpg",
          }}
          className="d-block w-100"
          src="img/3.jpg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
