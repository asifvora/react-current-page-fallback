import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FallbackProvider } from "../index";

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

// react-router-dom V5
// const App = () => {
//   return (
//     <Router>
//       <div>
//         <FallbackProvider>
//           <Switch>
//             <Route path="/about">
//               <About />
//             </Route>
//             <Route path="/contact">
//               <Contact />
//             </Route>
//             <Route path="/">
//               <Home />
//             </Route>
//           </Switch>
//         </FallbackProvider>
//       </div>
//     </Router>
//   );
// };

export default App;
