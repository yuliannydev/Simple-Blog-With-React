import { useState } from 'react'

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'First post', body: 'Lorem ipsum' , author: 'Yulianny', id: 1},
        {title: 'Second post', body: 'Lorem ipsum' , author: 'Yulianny', id: 1},
        {title: 'Thirty post', body: 'Lorem ipsum' , author: 'Yulianny', id: 1},
    ])

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Escrito por { blog.author }</p>
                </div>
            ))}    
        </div>
    )
}

export default Home
