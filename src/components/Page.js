import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { FaMinus } from 'react-icons/fa'
import NewNoteForm from './NewNoteForm'
import Note from './Note'

const Page = ({ title, onDelete, page, expand, notes, updPos, trackPos, onAdd, minimize, deleteNote}) => {
  


  notes = notes.filter(note => note.page === page._id)

  console.log(page)

  const show = page.selected === true ? true : false


  return (
    <div className={`page ${page.selected}Expand`}>
      <section style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <NewNoteForm onAdd={onAdd} 
        page={page}/>
        <h2 className='pageTitle'
        onClick={() => expand(page._id)}>{title}</h2>
        <span><FaTimes className={`deletePage ${!show}Delete`} 
        onClick={() => onDelete(page._id, page.title)}/></span>
        <span style={{justifySelf: 'flex-start'}}><FaMinus className={`${show}Minimize`} 
        onClick={() => minimize(page._id)}/></span>
      </section>
      <section className='notesContainer'>
          {notes.length === 0 ? <h2>No Notes</h2> : notes.map((note) => (
          <Note key={note._id} 
          note={note} 
          deleteNote={deleteNote} 
          trackPos={trackPos} 
          updPos={updPos}
          page={page}/> )) }
      </section> 
    </div>
  )
}

Page.defaultProps = {
    title: "Untitled"
}

Page.propTypes = {
    title: PropTypes.string.isRequired
}

export default Page


{/* <section className='notesContainer'>
{notes.length === 0 ? <h2>No Notes</h2> : notes.map((note) => (
<Notes key={note._id} 
note={note} 
deleteNote={deleteNote} 
trackPos={trackPos} 
updPos={updPos}
 page={page}/> )) }
</section> */}

{/* <NewNoteForm onAdd={onAdd} 
pageTitle={page.pageTitle} 
page={page}/> */}

{/* <span style={{justifySelf: 'flex-start'}}><FaMinus className={`${show}Minimize`} 
          onClick={() => minimize(page._id)}/></span> */}

           {/* <section style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h2 className='pageTitle'
          onClick={() => expand(page._id)}><Link to='/pages/notes'> {title} </Link></h2>
          <span><FaTimes className={`deletePage`} 
        onClick={() => onDelete(page._id, page.title)}/></span>*/}