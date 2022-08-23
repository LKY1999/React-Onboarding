import React from "react";
import news from "../data/news";
import CommentCard from "./CommentCard";
import ArticleContent from "./ArticleContent";
import { useParams } from "react-router-dom";

export default function Article() {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="">
      {news.map((news) => (
        <ArticleContent news={news} id={id} key={news.id} />
      ))}
    </div>
  );
}
