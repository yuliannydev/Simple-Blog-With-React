import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  /** HOOKS USE STATE */
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    /** Fetch request */
    fetch("http://localhost:8080/blogs")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error("Could not fetch the data for that resource");
      })
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Post" />}
    </div>
  );
};

export default Home;
