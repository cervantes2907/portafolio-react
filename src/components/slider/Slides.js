import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
      "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
    alt: "Projecto 1",
    desc: "Projecto 1",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Projecto 2",
    desc: "Projecto 2",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Projecto 3",
    desc: "Projecto 3",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2015/02/02/11/08/office-620817_960_720.jpg", 
    alt: "Projecto 4",
    desc: "Projecto 4",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;