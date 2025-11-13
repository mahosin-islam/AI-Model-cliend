import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const WithStyles = ({ image }) => {
  return (
    <div className="">
      <img src={image} alt={``} className="rounded-xl w-auto sm:w-full sm:h-100 md:h-full md:w-full   object-cover" />
    </div>
  );
};

const Bannar = () => {
  return (
    <div className="">
      <Carousel
        autoPlay
        autoPlaySpeed={3000}
        infinite
        responsive={{
          desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        

          tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
        }}
      >
        <WithStyles
       
          image="https://i.ibb.co.com/67c8ShLP/Capture-PNGagain.png"
        />
        <WithStyles
         
          image="https://i.ibb.co.com/fYhSwmZP/Capture-PNGLetes.png"
        />
        <WithStyles
        
          image="https://i.ibb.co.com/sJvvPc9L/Capture-PNGLast.png"
            description="React Carousel with SSR support – Part 2"
         
        />
      </Carousel>
    </div>
  );
};

export default Bannar;
