import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Heros = () => {

  useEffect(() => {
    const swiper = document.querySelector(".swiper");
    const animateSlide = () => {
      const allSlides = document.querySelectorAll(".swiper-slide");
      allSlides.forEach((slide) => {
        gsap.to(slide.querySelector("img"), {
          scale: 1,
          duration: 0,
        });
      });

      // Apply zoom effect to the active slide
      const activeSlide = document.querySelector(".swiper-slide-active");
      if (activeSlide) {
        const img = activeSlide.querySelector("img");
        gsap.fromTo(
          img,
          { scale: 1.1 }, // Initial zoom
          { scale: 1, duration: 2 } // Zoom-out effect
        );
      }
    };

    animateSlide(); // Animate the initial slide

    swiper.addEventListener("transitionend", animateSlide);

    return () => {
      swiper.removeEventListener("transitionend", animateSlide);
    };
  }, []);


  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
        delay: 3000, // 3 seconds delay
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-100"
      >
        <SwiperSlide>
          <div className="position-relative">
            <img src="https://img.freepik.com/premium-photo/bowl-with-healthy-tropical-fruit_23-2147779254.jpg?w=826" 
            alt="slide1" className="img-fluid w-100 imghero animated" />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-start justify-content-center px-5 ">
              <h4 className="herosub ms-4 fw-semibold mb-3 ">Green Cuisine</h4>
              <h1 className="ms-4 fw-bold mb-4 ">Nourishing With Organic Fare</h1>
              <Link to="/contact" >
              <button className="but2 py-2 px-5 fs-5 ">Contact us</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="position-relative">
            <img src="https://img.freepik.com/free-photo/top-view-breakfast-cereals-with-fruits-copy-space_23-2148697645.jpg?t=st=1735224972~exp=1735228572~hmac=f4e0c08b3182e9d6f9b21203ca346b26e7e840462f5545852dbc581be159156b&w=826" 
            alt="slide1" className="img-fluid w-100 imghero animated" />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-start justify-content-center px-5">
              <h4 className="herosub ms-4 fw-semibold mb-3 ">Nutritional Wonders</h4>
              <h1 className="ms-4  fw-bold mb-4 ">Health Perks of Organic</h1>
              <Link to="/contact" >
              <button className="but2 py-2 px-5 fs-5 ">Contact us</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="position-relative">
            <img src="https://img.freepik.com/premium-photo/green-smoothie-glass-jar-with-fresh-organic-green-vegetables-fruits-grey-spring-diet-healthy-raw-vegetarian-vegan-concept-detox-breakfast-alkaline-clean-eating-copy-space_80743-1163.jpg?w=740"
             alt="slide1" className="img-fluid w-100 imghero  animated"/>
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-start justify-content-center px-5 ">
              <h4 className="herosub ms-4 fw-semibold mb-3">Organic food</h4>
              <h1 className="ms-4 fw-bold mb-4 ">Eat Clean And Eat Green</h1>
              <Link to="/contact" >
              <button className="but2 py-2 px-5 fs-5">Contact us</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Heros;
