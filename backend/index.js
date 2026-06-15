if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express");
const mongoose = require("mongoose");
const port = 3002;
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session"); // Added for session storage
const passport = require("passport"); // Added for authentication
const LocalStrategy = require("passport-local"); // Added for local auth strategy

const Post = require('./Models/post');
const User = require('./Models/user'); // Import your updated User model

const app = express();
const dburl = process.env.ATLASDB_URL;

// CORS configuration (Ensure credentials true if sending cookies/sessions to frontend)
app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend URL if different
    credentials: true
}));

app.use(bodyParser.json());

// Session Configuration (Required by Passport)
app.use(session({
    secret: process.env.SESSION_SECRET || "mysupersecretstring", 
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 1 day expiration
    }
}));

// Initialize Passport & Session Middleware
app.use(passport.initialize());
app.use(passport.session());

// Use the local strategy provided automatically by passport-local-mongoose
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Database Connection
main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(dburl);
}

// Post Routes
app.get("/allposts", async(req, res, next)=>{
    const posts = await Post.find({});
    res.json(posts);
});


// Signup Route
app.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            return res.status(200).json({ message: "Registration successful!", user: registeredUser });
        });

    } catch (err) {
        res.status(400).json({ error: err.message }); // Handles duplicate usernames/emails automatically
    }
});

//Login Route
app.post("/login", passport.authenticate("local"), (req, res) => {
    // If passport.authenticate succeeds, this code block triggers
    res.status(200).json({ 
        message: "Login successful!", 
        user: { id: req.user._id, username: req.user.username, email: req.user.email } 
    });
});

// 3. Logout Route
app.post("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        res.status(200).json({ message: "Logged out successfully!" });
    });
});
app.listen(port, async()=>{
    console.log("app started!");
    console.log("app is listening on port " + port);
});
