import {useState, useEffect} from 'react';
import Header from './components/Header'
import PagesDisplay from './components/PagesDisplay'


function App() {

  //Different states set page data, note data, and note position data
  const [pages, setPages] = useState([]);
  const [notes, setNotes] = useState([]);
  const [position, setPosition] = useState({x: 0, y: 0, _id: ''});


  //Sets pages from server
  useEffect(() => {
    const getPages = async () => {
      const pagesFromServer = await fetchPages()
      setPages(pagesFromServer);
    }

    getPages();
  }, []);


  //Sets notes from server
  useEffect(() => {
    const getNotes = async () => {
      const notesFromServer = await fetchNotes()
      setNotes(notesFromServer)
    }

    getNotes();
  }, []);


  //Gets pages from server
  const fetchPages = async () => {
    const res = await fetch('http://localhost:3001/pages')
    const data = await res.json();

    console.log(data);
    return data
  }


  //Gets Notes from server
  const fetchNotes = async () => {
    const res = await fetch('http://localhost:3001/notes')
    const data = await res.json();
    console.log(data);
    return data
  }


  //Tracks position of notes on page so they remain in the same spot on reload
  const trackPos = (e, data, id) => {
      setPosition({x: data.x, y: data.y, _id: id}) 
  }

  const updatePosition = async (page, position, note) => {
    const res = await fetch(`http://localhost:3001/notes`,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: `${page}`,
        note: `${note}`,
        position: {
          x: position.x,
          y: position.y
        }})
    })

    const data = await res.json();
    console.log(data)
  }
  
 //Adds Page to Server
 const addPage = async (page) => {
  const res = await fetch(`http://localhost:3001/pages`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(page)
  })

  const data = await res.json();
  console.log(data)
  setPages([...pages, data]);
}

//Adds note to Server 
const addNote = async (note) => {
  console.log(note.note, note.pageTitle)
  const res = await fetch(`http://localhost:3001/notes`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(note)
  })

  const data = await res.json();
  console.log(data);
  setNotes([...notes, data]);
}




  //Updates page being minimized to the server
  const unExpand = async (id) => {
    const page = pages.filter(page => page._id === id);
    const res = await fetch(`http://localhost:3001/pages`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id: `${id}`,
      selected: false,
      pageTitle: page[0].pageTitle})
    })

    const data = await res.json()
    if(data === "Success"){
      setPages(
      pages.map(page => 
        page._id === id ? {...page, selected: false } : {...page, selected: false }
      )
    )}
  }

  //Updates page being expanded when selected to the server
  const toggleExpand = async (id) => {
    const page = pages.filter(page => page._id === id);
    const res = await fetch(`http://localhost:3001/pages`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id: `${id}`,
      selected: true,
      pageTitle: page[0].pageTitle})
    })

    const data = await res.json()
    console.log(data);
    if(data === "Success"){
      setPages(
      pages.map(page => 
        page._id === id ? {...page, selected: true } : {...page, selected: false }
      )
    )}
  }

  //Deletes a page and all of its notes
  const deletePage = async (id, pageTitle) => {
    const response = await fetch(`http://localhost:3001/notes`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: `${pageTitle}`,
    pageDeleted: true})
    })

    response.status === 200 ? console.log('Notes deleted') : console.log('error deleting notes');

    const res = await fetch(`http://localhost:3001/pages`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ pageTitle: `${pageTitle}`})
    })

    res.status === 200
      ? setPages(pages.filter((page) => page._id !== id))
      : alert('Error Deleting This Task')
  }


  //Deletes a note
  const deleteNote = async (page, note, id) => {
    const res = await fetch(`http://localhost:3001/notes`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({page: `${page}`, note: `${note}`, pageDeleted: false})
    })

    res.status === 200 ? setNotes(notes.filter(note => note._id !== id)) : alert('Error Deleting this Note')

  }

  return (
    <div className="App">
      <Header onAdd={addPage} pages={pages} /> 
      <PagesDisplay onAdd={addNote}
      pages={pages} 
      onDelete={deletePage} 
      deleteNote={deleteNote}
      toExpand={toggleExpand} 
      minimize={unExpand} 
      notes={notes} 
      trackPos={trackPos} 
      updPos={updatePosition}/>
    </div>
  );
}

export default App;
