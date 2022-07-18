import * as React from 'react';
import { Nav } from '../components/Nav';
import { FallbackPageWrapper } from '../../packages/current-page-fallback/src/index';

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
