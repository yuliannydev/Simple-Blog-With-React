import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'First post', body: 'Lorem ipsum' , author: 'Yulianny', id: 1},
        {title: 'Second post', body: 'Lorem ipsum' , author: 'Yulianny', id: 1},
        {title: 'Thirty post', body: 'Lorem ipsum' , author: 'Yulianny B', id: 1},
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs}/>
        </div>
    )
}

export default Home
