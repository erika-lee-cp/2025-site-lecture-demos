import './App.css';
import {Post} from './Post';

function App() {
  return (
    <div id="main">
      <h1>Welcome to Meta U &#127881;</h1>
      <h2>Write a post about what you are excited to learn about!</h2>
      <div id="post-container">
        <Post
          name="Marquees Brownlee"
          content="I want to learn how to build cleaner user interfaces."
        />
        <Post
          name="Justine Ezarik"
          content="I want to be a Javascript Wizard"
        />
      </div>
    </div>
  )
}

export default App;
