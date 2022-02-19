import React from "react";



const Banner = (props) => {
  const { imgBanner, nameBanner, } = props;

  return (
    <div className="containerCardBanner">
      <div className="containerBanner">
        <img src={imgBanner} alt="" />
        <p className="titleBanner">{nameBanner}  </p>
      </div >

          <div >
          <p className="text">asdasdasdasdlasdlasdlasldasld
            lasdlasdlasldasldasl
            asdlasdlasl
        </p>
        <p className="text">asdasdasdasdlasdlasdlasldasld
            lasdlasdlasldasldasl
            asdlasdlasl
            </p>
          </div>
     
    </div>
  );
};

export default Banner;
