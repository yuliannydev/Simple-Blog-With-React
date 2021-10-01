<<<<<<< HEAD
const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Escrito por {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Eliminar blog</button>
=======
const BlogList = ({ blogs }) => {
    
    return (
        <div className="blog-list">
            
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Escrito por { blog.author }</p>
                </div>
            ))}    
>>>>>>> parent of 283acf9 (:construction: Create handleDelete post)
        </div>
      ))}
    </div>
  );
};
export default BlogList;
