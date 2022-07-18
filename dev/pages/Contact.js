import * as React from 'react';
import { Nav } from '../components/Nav';
import { FallbackPageWrapper } from '../../packages/current-page-fallback/src/index';

const Contact = () => {

  return (
    <FallbackPageWrapper>
      <div>
        <Nav />
        <h1>Contact</h1>
      </div>
    </FallbackPageWrapper>
  );
};

export default Contact;
