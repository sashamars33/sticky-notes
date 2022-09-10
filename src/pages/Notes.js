import NewNoteForm from '../components/NewNoteForm'
import Note from '../components/Note'


const Notes = ({onAdd, pages, notes, deleteNote, updPos, trackPos, minimize}) => {

  const page = pages.filter(it => it.selected === true)
  const currentNotes = notes.filter(it => it.page === page[0]._id)
  
console.log(page, currentNotes, pages, notes)

  return (
    <div>
      <NewNoteForm onAdd={onAdd} 
      pageTitle={pages[0].title} 
      page={page} minimize={minimize}/>
        {currentNotes.map((note) => (
            <Note key={note._id} 
            note={note} 
            deleteNote={deleteNote} 
            trackPos={trackPos} 
            updPos={updPos}
            page={page}/> ))}
    </div>
  )
}

export default Notes


  // const [pages, setPages] = useState([]);
//   const [notes, setNotes] = useState([]);
//   const [notePosition, setNotePosition] = useState({x: 0, y: 0});

//   useEffect(() => {
//     const getNotes = async () => {
//       const notesFromServer = await fetchNotes()
//       setNotes(notesFromServer.notes)
//     }

//     getNotes();
//   }, []);

//   // useEffect(() => {
//   //   const getPages = async () => {
//   //     const pagesFromServer = await fetchPages()
//   //     setPages(pagesFromServer.pages);
//   //   }

//   //   getPages();
//   // }, []);

//   // const fetchPages = async () => {
//   //   const res = await fetch('/pages')
//   //   const data = await res.json();

//   //   return data
//   // }

//   const fetchNotes = async () => {
//     const res = await fetch('/pages/notes')
//     const data = await res.json();
//     console.log(data)
//     return data
//   }

//   const trackPos = (e, data) => {
//     setNotePosition({x: data.x, y: data.y})
// }

// const updatePosition = async (position, note) => {
//   console.log(note, notePosition, note._id)
//   const res = await fetch(`/pages/updatepos`,{
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       noteId: note,
//       position: {
//         x: notePosition.x,
//         y: notePosition.y
//       }})
//   })

//   const data = await res.json();
//   setNotePosition({x: data.x, y: data.y})
// }

// const addNote = async (note) => {
//     const res = await fetch(`/pages/createnote`, {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(note)
//     })
  
//     const data = await res.json();
//     setNotes([...notes, data]);
//   }

//    //Deletes a note
//    const deleteNote = async (page, note, id) => {
//     const res = await fetch(`/pages/deletenote`, {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({noteId: id})
//     })

//     console.log(res.status)
//     res.status === 200 ? setNotes(notes.filter(note => note._id !== id)) : alert('Error Deleting this Note')

//   }

//   // const currentPage = pages.filter(it => it.selected === true)
//   // const currentNotes = notes.filter(it => it.page === currentPage._id )

//   // console.log(pages.filter(it => it.selected === true)[0]._id)


//   // setPages(pages.filter(it => it.selected === true))
//   // setNotes(notes.filter(it => it.page === currentPage._id))
