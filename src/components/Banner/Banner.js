import React from "react";



const Banner = (props) => {
  const { imgBanner, nameBanner, } = props;

  return (
    <div>
      <div className="containerBanner">
        <img src={imgBanner} alt="" />
        <p className="titleBanner">{nameBanner}</p>
      </div>
    </div>
  );
};

export default Banner;
