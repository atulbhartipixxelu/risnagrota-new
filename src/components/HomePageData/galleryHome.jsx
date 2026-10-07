import { useState, useEffect } from "react";
import Img1 from "../../assets/images/one.png";
import Img2 from "../../assets/images/two.png";
import Img3 from "../../assets/images/three.png";

const GalleryData = () => {

  const galleryItems = [
    { src: Img1 },
    { src: Img2 },
    { src: Img3 },
    { src: Img1 },
    { src: Img2 },
  ];

  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (index < galleryItems.length - slidesToShow) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const slideWidth = 100 / slidesToShow;

  return (
    <section className="annual_function">
      <div className="container">

        <div className="gallery-wrapper">

          <button className="nav-btn left" onClick={prevSlide}>
            ❮
          </button>

          <div className="gallery-slider">
            <div
              className="gallery-track"
              style={{
                transform: `translateX(-${index * slideWidth}%)`
              }}
            >
              {galleryItems.map((item, i) => (
                <div
                  className="gallery-slide"
                  key={i}
                  style={{ minWidth: `${slideWidth}%` }}
                >
                  <img src={item.src} alt={`gallery-${i}`} />
                </div>
              ))}
            </div>
          </div>

          <button className="nav-btn right" onClick={nextSlide}>
            ❯
          </button>

        </div>

      </div>
    </section>
  );
};

export default GalleryData;
