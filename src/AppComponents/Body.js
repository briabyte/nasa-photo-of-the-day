import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
height: 200px;
width: 200px;` 

function Body(props) {
    console.log(props)
    return (
        <div id= 'mainBody' >
            <Image src= {props.url} alt= 'space from Nasa' id= 'spacnpme'/>
    <p id='bodyText'>{props.explanation}</p>
        </div>
    );
}

export default Body;