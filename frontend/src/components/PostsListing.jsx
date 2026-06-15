import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const PostsListing = () => {
  const [allposts, setallposts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allposts").then((res) => {
      console.log(res.data);
      setallposts(res.data);
    });
  }, []);

  return (
    <>
      {allposts.map((post, index) => {
        return (
          <div className="card" style={{ width: "52rem",margin:"20px"}} key={index}>
            <div className="card-body">
              <img src={post.image} style={{objectFit:"contain"}}/>
              <h5 className="card-title">{post.title || "Card title"}</h5>
              <p className="card-text">{post.body || "Some quick example text to build on the card title and make up the bulk of the card’s content."}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PostsListing;