import React from 'react';
import './Card.css';

export default (props) =>{
    return(
        <div className='CardItem'>
            <span>{props.content}</span>
        </div>
    );
}