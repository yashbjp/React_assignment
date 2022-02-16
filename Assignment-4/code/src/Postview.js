import React,{useState} from 'react';
import './Postview.css';
import axios from "axios";
import logo from "./images/logo.png"
import camera from "./images/camera.png"

const Postview=()=> {
  const[post,setPost]=useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:3004/user").then((res) => {
      setPost(res.data);
    });
},[]);
  return (
       <>
      <nav className="navbar">
      <div className="logo">
          <img src={logo} width="58" alt="logo"/>
        </div>
        <div className="name">
          <h1>Instaclone</h1>
        </div>
        <div className="camera">
          <img src={camera} alt="camera"/>
        </div>
      </nav>

      {post.map((post, idx) => {
        return (
          <>
            <div className="main-info" key={idx} style={{ margin: "20px 0" }}>
              <aside></aside>
              <section className="main-container">
                <header>
                  <div className="name-loc">
                    <h3>{post.name}</h3>
                    <span>{post.location}</span>
                  </div>
                </header>
             <div className="image-container">
                  <img src={post.PostImage} alt="post-pic" />
                </div>

                <footer>
                  <div className="likes-share-date">
                    <div className="like-share">
                      
                    </div>
                    <div className="date">
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <button>{post.likes} likes</button>
                  <h2>{post.description}</h2>
                </footer>
              </section>
              <aside></aside>
            </div>
          </>
        );
      })}
    </>
        
  );
}  

export default Postview;
     