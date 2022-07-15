<h1 align="center">react-current-page-fallback</h1>

<p align="center">Keep the current page rendered as a fallback until the new page is loaded with React.lazy and React.Suspense</p>

<p align="center">
  <a href="https://github.com/asifvora/react-current-page-fallback/blob/master/LICENSE" target="blank">
    <img src="https://img.shields.io/badge/%20license-MIT%20-green" alt="react-current-page-fallback licence" />
  </a>
  <a href="https://github.com/asifvora/react-current-page-fallback/fork" target="blank">
   <img src="https://img.shields.io/github/forks/asifvora/react-current-page-fallback?style=flat-square" alt="react-current-page-fallback forks"/>
  </a>
  <a href="https://github.com/asifvora/react-current-page-fallback/stargazers" target="blank">
   <img src="https://img.shields.io/github/stars/asifvora/react-current-page-fallback?style=flat-square" alt="react-current-page-fallback stars"/>
  </a>
  <a href="https://github.com/asifvora/react-current-page-fallback/issues" target="blank">
    <img src="https://img.shields.io/github/issues/asifvora/react-current-page-fallback?style=flat-square" alt="react-current-page-fallback issues"/>
  </a>
  <a href="https://github.com/asifvora/react-current-page-fallback/pulls" target="blank">
   <img src="https://img.shields.io/github/issues-pr/asifvora/react-current-page-fallback?style=flat-square" alt="react-current-page-fallback pull-requests"/>
  </a>
</p>

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

# 🛠️ Installation Steps

```bash
npm i --save react-current-page-fallback
```

```bash
yarn add react-current-page-fallback
```

<h2 align="center">Usage</h2>

### Basic example

**index.js**
```javascript
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<><App/></>);
```

**App.js**
### react-router-dom V6
```javascript
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FallbackProvider } from "react-current-page-fallback";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));

// react-router-dom V6
const App = () => {
  return (
    <Router>
      <div>
        <FallbackProvider>
          <Routes>
            <Route path="/about" element={ <About />} />
            <Route path="/contact" element={ <Contact />} />
            <Route path="/" element={ <Home />} />
          </Routes>
        </FallbackProvider>
      </div>
    </Router>
  );
};
export default App;
```

**App.js**

### react-router-dom V5

```javascript
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FallbackProvider } from "react-current-page-fallback";

// react-router-dom V5
const App = () => {
  return (
    <Router>
      <div>
        <FallbackProvider>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </FallbackProvider>
      </div>
    </Router>
  );
};
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


# Example
You can run the example by cloning the repo:

```sh
git clone https://github.com/asifvora/react-current-page-fallback.git
yarn
yarn start
```

# 🛡️ License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.

# 👨‍💻 Author
### 👤 Asif Vora
- Github: [@asifvora](https://github.com/asifvora)
- LinkedIn: [@asif-vora](https://www.linkedin.com/in/asif-vora/)
- Twitter: [@007_dark_shadow](https://twitter.com/007_dark_shadow)
- Instagram: [@007_dark_shadow](https://www.instagram.com/007_dark_shadow/)

# 🍰 Contributing

- Please contribute using [GitHub Flow](https://guides.github.com/introduction/flow). Create a branch, add commits, and [open a pull request](https://github.com/asifvora/react-current-page-fallback/compare).

- Please read [`CONTRIBUTING`](CONTRIBUTING.md) for details.

# 🙏 Support
This project needs a ⭐️  from you. Don't forget to leave a star ⭐️
