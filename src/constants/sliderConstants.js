export const servicesSettings = {
  dots: true,
  accessibility: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  loop: true,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        accessibility: true,
        // appendDots: (dots) => <ul className="custom-dots"> {dots} </ul>,
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        accessibility: true,
        // appendDots: (dots) => <ul className="custom-dots"> {dots} </ul>,
      },
    },
  ],
};

export const skillSlider = {
  responsive: [
    {
      breakpoint: 767,
      settings: {
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 100,
        dots: false,
        accessibility: true,
        arrows: false,
        slidesToShow: 3.4,
        slidesToScroll: 3,
        swipeToSlide: true,
        loop: true,
      },
    },
    {
      breakpoint: 1024,
      settings: "unslick",
    },
    {
      breakpoint: 2000,
      settings: "unslick",
    },
  ],
};
