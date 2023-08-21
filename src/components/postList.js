import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Hacer la llamada a la API para obtener los posts
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        console.log('Data:', data); // Agrega este console.log para verificar los datos
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);


  return (
    <div>
      <h2>List of Posts</h2>
      {posts.map(post => (
        <Card key={post.id} style={{ margin: '10px' }}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.content}</Card.Text>
            <Button variant="succesful">Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
