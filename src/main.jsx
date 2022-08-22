import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Inner from "./assets/components/inner";

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" component={Home} exact />
//         <Route path="/Inner" component={Inner} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;

ReactDOM.render(
  <React.StrictMode>
    <Home />
    {/* <Inner /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
