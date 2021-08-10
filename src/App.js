import React, { useState, useLayoutEffect, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  let localStorage = window.localStorage;
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');
  const [notesAll,setNotesAll] = useState(localStorage.getItem('notes'));
  const [noteIndex,setNoteIndex] = useState();
  const saveNote = () => {
    try {
      if (note && title) {
        let notes = new Array();
        if(localStorage.getItem('notes')){
          notes = JSON.parse(localStorage.getItem('notes'));
        }
        notes.push({title:title,note:note});
        localStorage.setItem('notes',JSON.stringify(notes));
        setNote('');
        setTitle('');
        setNotesAll(localStorage.getItem('notes'));
      } else { }
    } catch {

    }
  }

  useLayoutEffect(()=>{
    let notes = new Array();
    if(localStorage.getItem('notes')){
      notes = JSON.parse(localStorage.getItem('notes'));
    }
    notes.splice(noteIndex);
    localStorage.setItem('notes',JSON.stringify(notes));
  },[noteIndex]);

  const cleanAllNotes = () => setNotesAll(localStorage.clear());
  useLayoutEffect(()=>{
  },[notesAll]);
  return (
    <div className="App">
      <header>
        <input value={title} onChange={t => setTitle(t.target.value)}
          placeholder={'Title'}
        />
        <input value={note} onChange={t => setNote(t.target.value)}
          placeholder={'You message'}
        />
        <button onClick={saveNote}>Salvar</button>
        <button onClick={cleanAllNotes}>Clear All Notes</button>
      </header>

      <Card item={localStorage.getItem('notes')} setNoteIndex={setNoteIndex} />
    </div>
  );
}

export default App;
