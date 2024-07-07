import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsDisplay from './components/PostsDisplay';
import CreatePost from './components/CreatePost';
import './styles/styles.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const editPost = (updatedPost) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<PostsDisplay posts={posts} editPost={editPost} deletePost={deletePost} />} />
          <Route path="/create" element={<CreatePost addPost={addPost} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
