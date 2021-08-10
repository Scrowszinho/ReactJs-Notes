import React, { useLayoutEffect, useState } from 'react';
import './Card.css';
import FlatList from 'flatlist-react'
import { FaTrash, FaRegFile } from 'react-icons/fa';

function CardItem(props) {
    const removeSpecificNote = () => props.setNoteIndex(props.index);
    return (
        <div className='Note'>
            <h1 className='NoteTitle'>{props.title}</h1>
            <h2 className='NoteText'>{props.note}</h2>
            <FaTrash className='TrashCanIcon' onClick={removeSpecificNote}/>
        </div>
    );
}

function EmptyCard() {
    return (
        <div className='EmptyCard'>           
            <FaRegFile />
        </div>
    );
}


function Card(props) {
    const items = JSON.parse(props.item);
    return (
        <div className='CardGroup'>
            <FlatList list={items}
                renderItem={(item,index) => <CardItem key={index} title={item.title} 
                note={item.note} setNoteIndex={props.setNoteIndex} index={index} />}
                renderWhenEmpty={() => <EmptyCard />}
            />
        </div>
    );
}

export default Card;