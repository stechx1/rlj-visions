import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero className='illustration-section-01' />
      {/* <FeaturesTiles /> */}
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className='illustration-section-02'
      />
      <Testimonial id="testimonial" topDivider />
      <Contact id="contact" />
      {/* <Cta split /> */}
    </>
  );
};

export default Home;
