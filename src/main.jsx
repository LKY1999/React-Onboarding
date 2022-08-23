import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Home from "./pages/Home";



ReactDOM.render(
  <React.StrictMode>
    <Home />
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
