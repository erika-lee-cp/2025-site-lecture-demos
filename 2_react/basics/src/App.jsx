import './App.css';
import {Post} from './Post';

function App() {
  return (
    <div id="main">
      <h1>Welcome to Meta U &#127881;</h1>
      <h2>Write a post about what you are excited to learn about!</h2>
      <div id="post-container">
        <Post/>
      </div>
    </div>
  )
}

export default App;
