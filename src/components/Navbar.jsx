import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Simple Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#00ae42",
            borderRadius: "9px",
          }}
        >
          New Post
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
