import * as React from 'react';
import { Nav } from '../components/Nav';
import { FallbackPageWrapper } from '../../index';

const About = () => {

  return (
    <FallbackPageWrapper>
      <div>
        <Nav />
        <h1>About</h1>
      </div>
    </FallbackPageWrapper>
  );
};

export default About;
