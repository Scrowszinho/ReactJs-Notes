import React, { useLayoutEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  let localStorage = window.localStorage;
  const [note, setNote] = useState('');
  const[notesAll, setNotesAll] = useState(localStorage.getItem('notes'))
  const [title, setTitle] = useState('');
  const saveNote = () => {
    try {
      if (note && title) {
        let notes = [];
        if(localStorage.getItem('notes')){
          notes = JSON.parse(localStorage.getItem('notes'));
        }
        notes.push({title:title,note:note});
        localStorage.setItem('notes',JSON.stringify(notes));
        setNotesAll(localStorage.getItem('notes'));
        setNote('');
        setTitle('');
      } else { }
    } catch {

    }
  }

  const cleanAllNotes = () => {
    localStorage.clear()
    setNotesAll(localStorage.getItem('notes'));
  }
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
      <Card item={localStorage.getItem('notes')} />
    </div>
  );
}

export default App;
