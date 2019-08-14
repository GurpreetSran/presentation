import React from 'react';
import { Slide } from 'spectacle';
import Header from './Header';
import Footer from './Footer';

const BaseSlide = ({ lastUpdatedDate, children }) => (
  <Slide transition={['zoom']} bgColor="primary">
    <Header />
    {children}
    <br />
    <Footer lastUpdatedDate={lastUpdatedDate} />
  </Slide>
);

export default BaseSlide;
