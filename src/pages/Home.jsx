import React from "react";
import "../styles/Home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import news from "../assets/data/news";
// import NewsCard from "../assets/components/NewsCard";
import News from "../assets/components/News"
import Article from "../assets/components/Article"




function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News/>} exact />
        {/* <Route path="/article" component={Article} /> */}
      </Routes>
    </Router>
    
  );
}

export default App;
