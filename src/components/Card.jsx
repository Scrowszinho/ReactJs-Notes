import React, {useLayoutEffect, useState} from 'react';
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
    const[arrayList, setArrayList] = useState(window.localStorage.getItem('notes'));
    const items = JSON.parse(props.item);
    const removeItem = (index) =>{
        let localStorage = window.localStorage;
        let notes = [];
        if(localStorage.getItem('notes')){
          notes = JSON.parse(localStorage.getItem('notes'));
        }
        console.log(index);
        notes.splice(index,1);
        localStorage.setItem('notes',JSON.stringify(notes));
        setArrayList(window.localStorage.getItem('notes'));
    }
    useLayoutEffect(()=>{},[arrayList])
    return (
        <div className='CardGroup'>
            <FlatList list={items}
                renderItem={(item, index) =>
                    <div className='Note' key={index} >
                        <h1 className='NoteTitle'>{item.title}</h1>
                        <h2 className='NoteText'>{item.note}</h2>
                       <FaTrash className='TrashCanIcon'  onClick={()=>removeItem(index)} />
                    </div>
                }
                renderWhenEmpty={() => <EmptyCard />}
            />
        </div>
    );
}

export default Card;