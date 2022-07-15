import * as React from 'react';
import { Nav } from '../components/Nav';
import { FallbackPageWrapper } from '../../index';

const Home  = () => {

  return (
    <FallbackPageWrapper>
      <div>
        <Nav />
        <h1>Home</h1>
      </div>
    </FallbackPageWrapper>
  );
};

export default Home;
