import React from 'react';
import { Slide } from 'spectacle';
import Header from './Header';
import Footer from './Footer';

const BaseSlide = props => (
  <Slide transition={['zoom']} bgColor="primary">
    <Header />
    {props.children}
    <br />
    <Footer />
  </Slide>
);

export default BaseSlide;
