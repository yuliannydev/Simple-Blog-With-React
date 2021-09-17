const Home = () => {

    const handledButton = (event) => {
        console.log('Hello my friend!', event.target);
    }

    /** Function to handled Event of button */
    /* const handledAnotherButton = (name, event) => {
        console.log(`Hello ${name} ${event.tar}`);
    } */

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handledButton}>Click Me</button>

            { /**Example of event with anonymous arrow function*/
            
            /* <button onClick={ (event) => {
                handledAnotherButton(`Yulianny`, event);
            }}>Anothe Click</button> */}
        </div>
    )
}

export default Home
