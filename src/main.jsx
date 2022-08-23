import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Home from "./pages/Home";
import Article from "./assets/components/Article";




ReactDOM.render(
  <React.StrictMode>
    <Home />
    {/* <Article /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//     <Router>
//       <Route exact path="/">
//         <Home />
//       </Route>
//       <Route path="/">
//         <Article/>
//       </Route>
//     </Router>
//    ,
//   document.getElementById("root")
// );
