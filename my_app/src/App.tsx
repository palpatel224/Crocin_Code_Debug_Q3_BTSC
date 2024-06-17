import "./App.css";
import useBlogs from "./hooks/useBlogs";

// get all of the user blogs :)

function App() {
  const { createUser } = useBlogs();

  return (
    <div className="flex flex-col justify-center">
      <div>createUser.body</div>
      <div>createUser.title</div>
    </div>
  );
}

export default App;
