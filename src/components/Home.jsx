import { useState } from 'react'

const Home = () => {

    /** Hook useState */
    const [name, setName] = useState(`Who is my poshito`)
    const [icon, setIcon] = useState(`❓`)

        const handleButton = () => {
        setName('My poshito is Nathalie')
        setIcon(`🐔`)
        }

        return (
            <div className="home">
                <h2>Homepage</h2>
                <p>{ name } { icon }</p>
                <button onClick={handleButton}>Let me see! 👀</button>
            </div>
        )
}

export default Home
