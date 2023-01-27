import React from 'react';
import img1 from '../images/bg1.png';
import img2 from '../images/bg2.png';
import img3 from '../images/bg3.png';
// import {
//   MDBCarousel,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBCarouselElement,
// } from 'mdb-react-ui-kit';

export default function Carousel() {

  return (
    // <div className="fluid-container" style={{height:"50vh"}}>
    // <MDBCarousel showIndicators showControls fade interval={3000}>
    //   <MDBCarouselInner >
    //     <MDBCarouselItem className='active' >
    //       <MDBCarouselElement src={img1} alt='...' style={imgStyle}/>
    //     </MDBCarouselItem>
    //     <MDBCarouselItem>
    //       <MDBCarouselElement src={img1} alt='...' style={imgStyle}/>
    //     </MDBCarouselItem>
    //     <MDBCarouselItem>
    //       <MDBCarouselElement src={img1} alt='...' style={imgStyle}/>
    //     </MDBCarouselItem>
    //   </MDBCarouselInner>
    // </MDBCarousel>

    // </div>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className=" w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img2} className=" w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img3} className=" w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}