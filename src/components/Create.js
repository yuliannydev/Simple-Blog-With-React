import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, settitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Yulianny Betancourt");
  const [submit, setSubmit] = useState(false);
  const historyPage = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const blog = { title, body, author };

    setSubmit(true);

    fetch("http://localhost:8080/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setSubmit(false);
      historyPage.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Add new Blog!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Title
          <input
            type="text"
            placeholder="Add the title"
            value={title}
            required
            onChange={(event) => settitle(event.target.value)}
          />
        </label>

        {/** Body */}
        <label htmlFor="">
          Body
          <textarea
            name=""
            placeholder="Add the content"
            value={body}
            id=""
            cols="30"
            rows="10"
            required
            onChange={(event) => setBody(event.target.value)}
          ></textarea>
        </label>

        {/** select author  */}
        <select
          name=""
          id=""
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="Yulianny Betancourt">Yulianny Betancourt</option>
          <option value="Constribuidor(a)">Constribuidor(a)</option>
        </select>

        {/** Subtmit the blog post */}
        {!submit && <button>Send blog</button>}
        {submit && <button disabled>Charging...</button>}
      </form>
    </div>
  );
};
export default Create;
