import React from "react";
import { useEffect } from "react";
import Rlist from './Rlist'



const App = () =>{
    // useEffect(() => {
    //     fetch('http://localhost:3000/recipe')
    //     .then((data) => data.json())
    //     .then((res) => {console.log(res) })
    // }, []);

    return (
        <div>
            <h1>
            Welcome to React App thats build using Webpack and Babel separately
            </h1>
            <Rlist /> 
        </div>
    )
}



// changed this file name from App.js to App.jsx 
// and added the "export default App" at the bottom
export default App;