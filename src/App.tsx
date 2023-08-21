import React from 'react';
import './App.css';
import PostList from './components/postList'; // Asegúrate de que la ruta a PostList sea correcta

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Posts</h1>
      </header>
      <main>
        <PostList /> {/* Aquí renderizamos el componente PostList */}
      </main>
    </div>
  );
}

export default App;
