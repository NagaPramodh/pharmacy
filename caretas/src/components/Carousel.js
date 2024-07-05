import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import FirstImage from "../images/drop-2235618_1280.jpg";
import SecondImage from "../images/water-5967218_1280.jpg";
import ThirdImage from "../images/water-747618_1280.jpg";

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <FirstImage text="First slide" /> */}
        <Image src={FirstImage} width={"100%"} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <SecondImage text="Second slide" /> */}
        <Image src={SecondImage} width={"100%"} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ThirdImage text="Third slide" /> */}
        <Image src={ThirdImage} width={"100%"} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
