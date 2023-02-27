

import React from 'react';
import { Link } from 'react-router-dom';
import posts from './data';


export default function PostView() {
  return (
    <div className="wrapper">
      <h1>Post View</h1>
      <div className="post-container">
        {posts.map((post) => (
          <div className="post" key={post.date}>
             <p className="author">{post.name}</p>
             <p className="location">{post.location}</p>
          <img className='img' src={post.PostImage} alt={post.description} />
          <div className="post-details">
            
            <p className="likes">{post.likes} likes</p>
            <p className="description">{post.description}</p>
          </div>
        </div>
))}
    </div>
    <Link to="/landingpage" className="button">
      Back to Landing Page
    </Link>
  </div>
);
}
