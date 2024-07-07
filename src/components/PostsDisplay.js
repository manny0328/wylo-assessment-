import React from 'react';
import { Link } from 'react-router-dom';

const PostsDisplay = ({ posts, editPost, deletePost }) => {
  const handleEdit = (id) => {
    const newContent = prompt("Edit your post:", posts.find(post => post.id === id).content);
    if (newContent !== null) {
      editPost({ id, content: newContent });
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.content}
            <div>
              <button onClick={() => handleEdit(post.id)}>Edit</button>
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/create" className="link-button">
        <button>Create New Post</button>
      </Link>
    </div>
  );
};

export default PostsDisplay;
