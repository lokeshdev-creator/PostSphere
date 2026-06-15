import React from "react";
import PostsListing from "./PostsListing";
import { Route,Router } from "react-router";
const Home=()=>{
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <PostsListing/>
                </div>
            </div>
        </div>
    );
}
export default Home;