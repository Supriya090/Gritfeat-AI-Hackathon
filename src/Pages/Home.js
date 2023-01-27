import React from 'react';
import Carousel from '../components/Carousel';
import IntroContainer from '../components/IntroContainer';
import Button from '../components/Button';

const Home = () => {
  return (
    <>
      <div className="container-fluid main_header">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto ">
            <div className="row d-flex" style={{justifyContent:"center", alignItems:"center", minHeight:"80vh"}}>
              <div className="col-md-6 col-11 order-2 order-md-1 order-sm-2 order-lg-1">
                <IntroContainer></IntroContainer>
                <Button name="Let's Go!" />
              </div>
              <div className="col-md-6 col-12 my-5 order-1 order-md-2 order-sm-1 order-lg-2">
                <Carousel></Carousel>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Carousel/>
  <IntroContainer/>
  <Button name ="Let's Go!"/> */}
    </>
  );
};

export default Home;
