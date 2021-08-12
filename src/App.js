import React, { useLayoutEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  let localStorage = window.localStorage;
  const [note, setNote] = useState('');
  const [notesAll, setNotesAll] = useState(localStorage.getItem('notes'))
  const [title, setTitle] = useState('');
  const [change, setChange] = useState(0);
  const saveNote = () => {
    try {
      if (note && title) {
        if (note != ' ' || title !== ' ') {
          let notes = [];
          if (localStorage.getItem('notes')) {
            notes = JSON.parse(localStorage.getItem('notes'));
          }
          notes.push({ title: title, note: note });
          localStorage.setItem('notes', JSON.stringify(notes));
          setNotesAll(localStorage.getItem('notes'));
          setNote('');
          setTitle('');
        } else { alert('Title or Note is empty'); }
      } else { alert('Title or Note is empty'); }
    } catch {
      alert(Error, 'Something is going bad');
    }
  }

  const cleanAllNotes = () => {
    const confirm = window.confirm('Drop all notes?');
    if (confirm) {
      localStorage.clear()
      setNotesAll(localStorage.getItem('notes'));
    }
  }
  useLayoutEffect(() => {
    setChange(0);
  }, [notesAll, change]);
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
        <button onClick={cleanAllNotes}>Clear All</button>
      </header>
      <Card item={localStorage.getItem('notes')} setChange={setChange} />
    </div>
  );
}

export default App;
