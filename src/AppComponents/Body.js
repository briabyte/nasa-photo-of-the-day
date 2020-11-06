import React from 'react';

function Body(props) {
    console.log(props)
    return (
        <div id= 'mainBody' >
            <img scr= {props.url} alt= 'space from Nasa' id= 'space'/>
    <p id='bodyText'>{props.explanation}</p>
        </div>
    );
}

export default Body;