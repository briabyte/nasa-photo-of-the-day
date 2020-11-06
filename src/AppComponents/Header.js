import React from 'react';

function Header(props) {
    return (
        <div id= 'title'>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap" rel="stylesheet"></link>
    
            <p id= 'headerTitle'>{props.title}</p>
        
        </div>
    );
}
export default Header;