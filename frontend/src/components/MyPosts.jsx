import React from "react";

const MyPosts=()=>{
    return(
         <div className="card" style={{ width: "52rem",margin:"20px"}}>
            <div className="card-body">
              {/* <img src={post.image} style={{objectFit:"contain"}}/> */}
              <h5 className="card-title"> "Card title"</h5>
              <p className="card-text">post.body || "Some quick example text to build on the card title and make up the bulk of the card’s content."</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
    );
}

export default MyPosts;