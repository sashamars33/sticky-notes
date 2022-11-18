import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useState, useEffect} from 'react';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navagation from './components/Navagation'
import Pages from './pages/Pages'
import Logout from './pages/Logout'
import About from './pages/About'




function App() {

  //Different states set page data, note data, and note position data
  // const [user, setUser] = useState();
  const [pages, setPages] = useState([]);
  const [notes, setNotes] = useState([]);
  // const [notePosition, setNotePosition] = useState({x: 0, y: 0});
  const [login, setLogin] = useState(false)
       
  //Sets user or whether or not a user is logged in
  // useEffect(() => {
  //   const getUser = async () => {
  //     const loggedInUser = await fetchUser()
  //     setUser(loggedInUser)
  //   }

  //   getUser();
  // }, [])
  //Sets pages from server
  useEffect(() => {
    const getPages = async () => {
      const pagesFromServer = await fetchPages()
      setPages(pagesFromServer.pages);
    }

    getPages();
  }, []);
       
       
  //Sets notes from server
  useEffect(() => {
    const getNotes = async () => {
      const notesFromServer = await fetchNotes()
      setNotes(notesFromServer.notes)
    }

    getNotes();
  }, []);
      
       
  //Gets pages from server
  const fetchPages = async () => {
    const res = await fetch('/pages')
    const data = await res.json();
    if(data === false){
      setLogin(false)
      return []
    }else{
    setLogin(true)
    return data
    }
  }
       
  //   //Gets user from server
  // const fetchUser = async () => {
  //   const res = await fetch('/pages/user')
  //   const data = await res.json();
  //   if(Login === false){
  //     return []
  //   }else{
  //     return data
  //   }
  // }
       
  //Gets Notes from server
  const fetchNotes = async () => {
    const res = await fetch('/pages/notes')
    const data = await res.json();
    if(Login === false){
      return []
    }else{
      return data
    }
  }
  
  //Logs out user
  const logout = async () => {
    const res = await fetch('/logout')
    const data = await res.json();
    setLogin(false)
  }
       
  //  Tracks position of notes on page so they remain in the same spot on reload
  //  const trackPos = (e, data) => {
  //      setNotePosition({x: data.x, y: data.y})
  //  }
  
  //  const updatePosition = async (position, note) => {
  //    const res = await fetch(`/pages/updatepos`,{
  //      method: 'PUT',
  //      headers: { 'Content-Type': 'application/json' },
  //      body: JSON.stringify({
  //        noteId: note,
  //        position: {
  //          x: position.x,
  //          y: position.y
  //        }})
  //    })
  
  //    const data = await res.json();
  //    setNotePosition({x: data.x, y: data.y})
  //  }

  //Updates Completion Checkbox on Notes
  const updComplete = async (check, comp) => {
    console.log(check, comp)
    const res = await fetch(`/pages/completed`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({noteId: check, completed: comp})
    })

    const data = await res.json()
    if(data === true){
      setNotes(
      notes.map(note => 
        note._id === check ? {...note, completed: !comp } : {...note, completed: note.completed }
      )
    )}
  }
   
  //Adds Page to Server
  const addPage = async (page) => {
   const res = await fetch(`/pages/createpage`, {
     method: 'POST',
     headers: {
       'Content-type': 'application/json'
     },
     body: JSON.stringify(page)
   })
  
   const data = await res.json();
   setPages([...pages, data]);
  }
       
  //Adds note to Server 
  const addNote = async (note) => {


    const res = await fetch(`/pages/createnote`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  
    const data = await res.json();
    setNotes([...notes, data]);
  }
        
       
   //Updates page being minimized to the server
   const unExpand = async (id) => {
     const res = await fetch(`/pages/closepage`, {
       method: 'PUT',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ pageId: id})
     })
  
     const data = await res.json()
     if(data === true){
       setPages(
       pages.map(page => 
         page._id === id ? {...page, selected: false } : {...page, selected: false }
       )
     )}
   }
       
   //Updates page being expanded when selected to the server
   const toggleExpand = async (id) => {
     const res = await fetch(`/pages/select`, {
       method: 'PUT',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ pageId: id }, {
       selected: true })
     })
  
     const data = await res.json()
     if(data === true){
       setPages(
       pages.map(page => 
         page._id === id ? {...page, selected: true } : {...page, selected: false }
       )
     )}
   }
       
   //Deletes a page and all of its notes
   const deletePage = async (id) => {
     const response = await fetch(`pages/deletepage`, {
       method: 'DELETE',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({pageId: id})
     })

  
     const res = await fetch(`/pages/deletenotes`, {
       method: 'DELETE',
       headers: { 'Content-Type': 'application/json'},
       body: JSON.stringify({ pageId: id})
     })
  
     res.status === 200
       ? setPages(pages.filter((page) => page._id !== id))
       : alert('Error Deleting This Task')
   }
  
  
   //Deletes a note
   const deleteNote = async (id) => {
     const res = await fetch(`/pages/deletenote`, {
       method: 'DELETE',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({noteId: id})
     })
  
     res.status === 200 ? setNotes(notes.filter(note => note._id !== id)) : alert('Error Deleting this Note')
   }
   
   console.log(notes)


  return (
  <Router forceRefresh={true}>
    <Navagation login={login} logout={logout} />
    <Routes>
        <Route path='/' exact element={<Home login={login}/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        {login === false ? <Route path='/' exact element={<Home login={login}/>} /> : <Route path='/pages' element={<Pages pages={pages} onAdd={addPage} deletePage={deletePage} expand={toggleExpand} notes={notes} deleteNote={deleteNote} onAddNote={addNote}  minimize={unExpand} updComp={updComplete}/>} />}
        <Route path='/logout' element={<Logout />} />
        {/* <Route path='/pages/notes' element={<Notes notes={notes} pages={pages} deleteNote={deleteNote} onAdd={addNote} updPos={updatePosition} trackPos={trackPos} minimize={unExpand}/>} /> */}
    </Routes>
  </Router>
  );
}

export default App;
