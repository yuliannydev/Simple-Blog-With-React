const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Simple Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#00ae42",
                    borderRadius: "9px"
                }}>New Post</a>
            </div>
        </nav>
    )
}

export default Navbar
