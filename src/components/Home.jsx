import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  /** HOOKS USE STATE */
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    /** Fetch request */
    fetch("http://localhost:8080/blogs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Post" />}
    </div>
  );
};

export default Home;
