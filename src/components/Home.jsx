import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  /** HOOKS USE STATE */
  const [blogs, setBlogs] = useState([
    { title: "First post", body: "Lorem ipsum", author: "Yulianny", id: 1 },
    { title: "Second post", body: "Lorem ipsum", author: "Yulianny", id: 2 },
    { title: "Thirty post", body: "Lorem ipsum", author: "Yulianny B", id: 3 },
  ]);

  const [name, setName] = useState(" 🐣 ");

  useEffect(() => {
    console.log(name);
  }, [name]);

  /** Delete post */
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Post" handleDelete={handleDelete} />
      <button onClick={() => setName(" 🐥 pioooo :3")}>
        Empolla el poshito
      </button>
    </div>
  );
};

export default Home;
