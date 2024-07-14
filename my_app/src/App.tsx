import "./App.css";
import useBlogs from "./hooks/useBlogs";

// get all of the user blogs :)

function App() {
  const blogs = useBlogs();

  return (
    <div className="flex flex-col justify-center">
      {blogs ? (
        <div>
          {blogs.map((element,index) => (
            <div key={index}>{element.title}</div> 
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
