import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname=dirname(fileURLToPath(import.meta.url));

const app=express();
const port=4000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
let posts=[];
let messages=[];

// Set the view engine to EJS
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{

    res.render(__dirname+"/views/index.ejs",{posts});
});

//add post
app.get("/posts-add",(req,res)=>{
    res.render(__dirname+"/views/post.ejs");
});

//contact
app.get("/contact",(req,res)=>{
    res.render(__dirname+"/views/contact.ejs");
});

// Route to create a new post
app.post('/posts', (req, res) => {

    
    const newPost = {
        id: posts.length + 1,
        title: req.body["title"],
        content: req.body["content"],
        
    };
    // console.log(req.body["title"]);
    // console.log(req.body["content"]);    
    // posts.push(newPost);

    if(posts.push(newPost)){
        messages.push('Posts Created successfully!');
    }
       
  
    // res.redirect('/post');
    res.render(__dirname+"/views/post.ejs",{messages:messages});
});

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
});
