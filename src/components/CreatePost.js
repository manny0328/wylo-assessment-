import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ addPost }) => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), content };
    addPost(newPost);
    navigate('/');
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
