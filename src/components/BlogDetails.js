import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:8080/blogs/${id}`
  );

  return (
    <div className="blog-details">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2> {data.title} </h2>
          <p>Escrito por: {data.author}</p>
          <hr />
          <div>
            <p> {data.body} </p>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
