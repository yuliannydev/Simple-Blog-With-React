import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const historyPage = useHistory();
  const { data, loading, error } = useFetch(
    `https://morning-harbor-33325.herokuapp.com/blogs/${id}`
    /* `http://localhost:8080/blogs/${id}` */
  );

  const handleDeletePost = () => {
    fetch(`https://morning-harbor-33325.herokuapp.com/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      historyPage.push("/");
    });
  };

  return (
    <div className="blog-details">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2> {data.title} </h2>
          <p className="writer">
            Escrito por: <em>{data.author}</em>
          </p>
          <div>
            <p> {data.body} </p>
          </div>
          <button onClick={handleDeletePost}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
