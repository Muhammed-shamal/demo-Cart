import React from "react";
import Banner from "../componets/Banner/banner";
import request from "./request";
import PostCards from "../componets/Products/postCards";

export default function Home() {
  const rowPost = request.map((data, index) => {
    return <PostCards key={index} title={data.title} url={data.url} />;
  });
  return (
    <div className="container">
      <Banner />
      {rowPost}
    </div>
  );
}
