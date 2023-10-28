import Carousel from "nuka-carousel";
import SwipIcon from "../../../Assets/chevron_icon.svg";
import CloseIcon from "../../../Assets/close_white.svg";

function BigCarousel({ images, setBigCarrousel }) {
  return (
    <div className="absolute flex items-center justify-center z-50 top-0 right-0 w-full h-screen bg-[rgba(0,0,0,0.7)]">
      <button
        className="absolute top-16 right-32"
        onClick={() => setBigCarrousel(false)}
      >
        <img src={CloseIcon} alt="close-icon" />
      </button>
      <div className="w-[70%] h-[70vh]">
        <Carousel
          wrapAround={true}
          slidesToShow={1}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              className="bg-sw-white rounded-full p-4 border absolute -left-[8%] top-[40%]"
              onClick={previousSlide}
            >
              <img className="rotate-90 w-8" src={SwipIcon} alt="before-icon" />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              className="bg-sw-white rounded-full p-4 border absolute -right-[8%] top-[40%]"
              onClick={nextSlide}
            >
              <img
                className="-rotate-90 w-8"
                src={SwipIcon}
                alt="before-icon"
              />
            </button>
          )}
        >
          {images.map((image) => (
            <img
              key={image.image}
              className="rounded-xl w-full h-[70vh] object-cover"
              src={image}
              alt="all-images"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default BigCarousel;
