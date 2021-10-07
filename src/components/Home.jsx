import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, loading, error } = useFetch(
    "https://morning-harbor-33325.herokuapp.com/blogs/"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {data && <BlogList blogs={data} title="All Blog Post" />}
    </div>
  );
};

export default Home;
