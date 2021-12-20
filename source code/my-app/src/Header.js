import React from "react";
import "./style.css";

//creates the header for the website
function Header(){
    return(
        <header>
            <img 
                src = {require("./sadcat.jpg")}
                alt = "Sad Cat"            
            />
            <h1>Meme  Generator</h1>
        </header>
    );
}

export default Header;