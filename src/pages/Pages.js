import Header from '../components/Header'
import PagesDisplay from '../components/PagesDisplay'



const Pages = ({pages, onAdd, expand, deletePage, minimize, trackPos, updPos, deleteNote, onAddNote, notes, updComp}) => {

  return (

    <div>
      <Header onAdd={onAdd} pages={pages} /> 
      <PagesDisplay onAdd={onAddNote}
      pages={pages} 
      onDelete={deletePage} 
      deleteNote={deleteNote}
      expand={expand} 
      minimize={minimize} 
      notes={notes} 
      trackPos={trackPos} 
      updPos={updPos} updComp={updComp}/>
    </div>


  )
}

export default Pages

      //Different states set page data, note data, and note position data
//   const [pages, setPages] = useState([]);
// //   const [notes, setNotes] = useState([]);
// //   const [notePosition, setNotePosition] = useState({x: 0, y: 0});


//   //Sets pages from server
//   useEffect(() => {
//     const getPages = async () => {
//       const pagesFromServer = await fetchPages()
//       setPages(pagesFromServer.pages);
//     }

//     getPages();
//   }, []);


// //   //Sets notes from server
// //   useEffect(() => {
// //     const getNotes = async () => {
// //       const notesFromServer = await fetchNotes()
// //       setNotes(notesFromServer.notes)
// //     }

// //     getNotes();
// //   }, []);


//   //Gets pages from server
//   const fetchPages = async () => {
//     const res = await fetch('/pages')
//     const data = await res.json();

//     return data
//   }


// //   //Gets Notes from server
// //   const fetchNotes = async () => {
// //     const res = await fetch('/pages/notes')
// //     const data = await res.json();

// //     return data
// //   }


//   //Tracks position of notes on page so they remain in the same spot on reload
// //   const trackPos = (e, data) => {
// //       setNotePosition({x: data.x, y: data.y})
// //   }

// //   const updatePosition = async (position, note) => {
// //     console.log(note, notePosition, note._id)
// //     const res = await fetch(`/pages/updatepos`,{
// //       method: 'PUT',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({
// //         noteId: note,
// //         position: {
// //           x: notePosition.x,
// //           y: notePosition.y
// //         }})
// //     })

// //     const data = await res.json();
// //     setNotePosition({x: data.x, y: data.y})
// //   }
  
//  //Adds Page to Server
//  const addPage = async (page) => {
//   const res = await fetch(`/pages/createpage`, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(page)
//   })

//   const data = await res.json();
//   setPages([...pages, data]);
// }

// // //Adds note to Server 
// // const addNote = async (note) => {
// //   const res = await fetch(`/pages/createnote`, {
// //     method: 'POST',
// //     headers: {
// //       'Content-type': 'application/json'
// //     },
// //     body: JSON.stringify(note)
// //   })

// //   const data = await res.json();
// //   setNotes([...notes, data]);
// // }




//   //Updates page being minimized to the server
//   const unExpand = async (id) => {
//     const res = await fetch(`/pages/closepage`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ pageId: id,
//       selected: false})
//     })

//     const data = await res.json()
//     if(data === true){
//       setPages(
//       pages.map(page => 
//         page._id === id ? {...page, selected: false } : {...page, selected: false }
//       )
//     )}
//   }

//   //Updates page being expanded when selected to the server
//   const toggleExpand = async (id) => {
//     const res = await fetch(`/pages/select`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ pageId: id }, {
//       selected: true })
//     })

//     const data = await res.json()
//     if(data === true){
//       setPages(
//       pages.map(page => 
//         page._id === id ? {...page, selected: true } : {...page, selected: false }
//       )
//     )}
//   }

// //   //Deletes a page and all of its notes
// //   const deletePage = async (id, pageTitle) => {
// //     const response = await fetch(`http://localhost:3001/pages/deletepage`, {
// //       method: 'DELETE',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({ page: `${pageTitle}`,
// //     pageDeleted: true})
// //     })

// //     response.status === 200 ? console.log('Notes deleted') : console.log('error deleting notes');

// //     const res = await fetch(`http://localhost:3001/pages`, {
// //       method: 'DELETE',
// //       headers: { 'Content-Type': 'application/json'},
// //       body: JSON.stringify({ pageTitle: `${pageTitle}`})
// //     })

// //     res.status === 200
// //       ? setPages(pages.filter((page) => page._id !== id))
// //       : alert('Error Deleting This Task')
// //   }


// //   //Deletes a note
// //   const deleteNote = async (page, note, id) => {
// //     const res = await fetch(`/pages/deletenote`, {
// //       method: 'DELETE',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({noteId: id})
// //     })

// //     console.log(res.status)
// //     res.status === 200 ? setNotes(notes.filter(note => note._id !== id)) : alert('Error Deleting this Note')

// //   }
