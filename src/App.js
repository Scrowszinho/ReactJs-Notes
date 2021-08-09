import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  let localStorage = window.localStorage;
  const [note, setNote] = useState();
  const [title, setTitle] = useState();
  const saveNote = () => {
    try {
      if (note && title) {
        let noteData = { title: title, note: note };
        localStorage.setItem('notes', JSON.stringify(noteData));
        console.log(window.localStorage);
        console.log(window.localStorage.getItem('notes'))
        setNote();
      } else { }
    } catch {

    }
  }
  const cleanAllNotes = () => localStorage.clear();
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

      <Card item={localStorage} />
    </div>
  );
}

export default App;
