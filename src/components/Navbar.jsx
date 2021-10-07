import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Simple Blog</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#00ae42",
            borderRadius: "9px",
            textAlign: "center",
            /* marginRight: "-175px", */
          }}
        >
          New Post
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
