<h1 align="center">react-current-page-fallback</h1>

<p align="center">Easy-to-use ui compoment</p>

```sh
npm i --save react-current-page-fallback
```

```sh
yarn add react-current-page-fallback
```

<h2 align="center">Usage</h2>

### Basic example
**App.js**

```javascript
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { FallbackProvider } from "react-current-page-fallback";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <BrowserRouter>
    <FallbackProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </FallbackProvider>
  </BrowserRouter>
);

export default App;
```

**Nav.js**

```javascript
import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link> 
        <Link to="/contact">Contact</Link>
    </>
  );
};

export default Nav;
```

**Home.js**

```javascript
import React from 'react';
import { Nav } from '../components/Nav';
import { FallbackPageWrapper } from "react-current-page-fallback";

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
```

**About.js**

```javascript
import React from 'react';
import { Nav } from '../components/Nav';
import { FallbackPageWrapper } from "react-current-page-fallback";

const About  = () => {
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
```

**Contact.js**

```javascript
import React from 'react';
import { Nav } from '../components/Nav';
import { FallbackPageWrapper } from "react-current-page-fallback";

const Contact  = () => {
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
```


<h2 align="center">Example</h2>

You can run the example by cloning the repo:

```sh
git clone https://github.com/asifvora/react-current-page-fallback.git
yarn
yarn start
```

## Questions?🤔

Hit me on [![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/007_dark_shadow)
[![Medium](https://img.shields.io/badge/Medium-asifvora-brightgreen.svg)](https://medium.com/@asifvora)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-asifvora-blue.svg)](https://www.linkedin.com/in/asif-vora/)
[![Instagram](https://img.shields.io/badge/Instagram-Asif%20Vora-green.svg)](https://www.instagram.com/007_dark_shadow/)

## License

Copyright (c) Asif Vora

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
