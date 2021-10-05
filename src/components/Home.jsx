import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, loading, error } = useFetch("http://localhost:8080/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {data && <BlogList blogs={data} title="All Post" />}
    </div>
  );
};

export default Home;
