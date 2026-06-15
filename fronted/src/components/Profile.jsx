import React from "react";
import Avatar from "@mui/material/Avatar";
const Profile=()=>{
    return(
        <div className="card profile" style={{width: "25rem", height:"450px" , backgroundColor:"red"}} >
  <div className="card-body" >
    <Avatar
        alt="User"
        src="/static/images/avatar/3.jpg"
        style={{
          width: "100px",
          height: "100px",
          border: "2px solid #334155",
          cursor: "pointer"
        }}
      /><h5 className="profile card-title">Lokesh Dashore</h5>
      <h6>gamil@.com</h6>
    <p className="profile card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">view posts</a>
  </div>
</div> 
    );
}

export default Profile;