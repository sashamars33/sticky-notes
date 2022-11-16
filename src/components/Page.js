import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { FaMinus } from 'react-icons/fa'
import NewNoteForm from './NewNoteForm'
import Note from './Note'

const Page = ({ title, onDelete, page, expand, notes, updPos, trackPos, onAdd, minimize, deleteNote, i}) => {
  
  notes = notes.filter(note => note.page === page._id)
  const show = page.selected === true ? true : false

  return (
    <div className={`page ${page.selected}Expand page${i} flex`}>
      <section className={`${page.selected}pageMenu flex`}>
        <div className={`${page.selected}pageActions flex`}>
          <h2 className={`${page.selected}pageTitle`}
          onClick={() => expand(page._id)}>{title}</h2>
          <span><FaTimes className={`deletePage ${!show}Delete`} 
          onClick={() => onDelete(page._id, page.title)}/></span>
          <span style={{justifySelf: 'flex-start'}}><FaMinus className={`${show}Minimize`} 
          onClick={() => minimize(page._id)}/></span>
        </div>
        <NewNoteForm onAdd={onAdd} 
        page={page}/>
         <span>Items: {notes.length}</span>
      </section>
      <section className='notesContainer grid'>
          {notes.length === 0 ? <p>  </p> : show === false ? <p></p> : notes.map((note) => (
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


