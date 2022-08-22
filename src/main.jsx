import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Inner from "./assets/components/inner";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    {/* <Inner /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// const App = () => {
//   <Router>
//     <Switch>
//       <Route path="/" exact>
//         <Home />
//       </Route>
//       <Route path="/Inner">
//         <Inner />
//       </Route>
//     </Switch>
//   </Router>;

//   // document.getElementById("root");
// };

// export default App;
