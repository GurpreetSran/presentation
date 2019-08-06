import React from 'react';
import { Slide } from 'spectacle';
import Header from './Header';

const BaseSlide = props => (
  <Slide transition={['zoom']} bgColor="primary">
    <Header />
    {props.children}
  </Slide>
);

export default BaseSlide;
