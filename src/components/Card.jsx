import React from 'react';
import './Card.css';
import FlatList from 'flatlist-react'
import { FaTrash, FaRegFile } from 'react-icons/fa';

function EmptyCard() {
    return (
        <div className='EmptyCard'>
            <FaRegFile />
        </div>
    );
}

function Card(props) {
    const items = JSON.parse(props.item);
    const removeItem = (index, item) => {
        console.log(item)
        const confirm = window.confirm(`Drop note: ${item.title}`);
        if (confirm) {
            let localStorage = window.localStorage;
            let notes = [];
            if (localStorage.getItem('notes')) {
                notes = JSON.parse(localStorage.getItem('notes'));
            }
            console.log(index);
            notes.splice(index, 1);
            localStorage.setItem('notes', JSON.stringify(notes));
            props.setChange(1);
        }
    }
    return (
        <div className='CardGroup'>
            <FlatList list={items}
                renderItem={(item, index) =>
                    <div className='Note' key={index} >
                        <h1 className='NoteTitle'>{item.title}</h1>
                        <h2 className='NoteText'>{item.note}</h2>
                        <FaTrash className='TrashCanIcon' onClick={() => removeItem(index, item)} />
                    </div>
                }
                renderWhenEmpty={() => <EmptyCard />}
            />
        </div>
    );
}

export default Card;