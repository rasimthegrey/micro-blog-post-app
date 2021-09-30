
import PostCreate from "./components/Posts/PostCreate/PostCreate";
import PostList from "./components/Posts/PostList/PostList";

function App() {
  return (
      <div className='container'>
        <h1>Create Post</h1>
        <PostCreate />
        <hr />
        <h1>Posts</h1>
        <PostList />
      </div>
  );
}

export default App;
