import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { FaMinus } from 'react-icons/fa'
import NewNoteForm from './NewNoteForm'
import Notes from './Notes'

const Page = ({ title, onDelete, page, toExpand, minimize, notes, deleteNote, trackPos, updPos }) => {
  
  notes = notes.filter(note => note.page === page.pageTitle)

  const show = page.selected === true ? true : false


  return (
    <div className={`page ${page.selected}Expand`}>
      <section style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <NewNoteForm pageTitle={page.pageTitle} page={page}/>
          <h2 className='pageTitle'onClick={() => toExpand(page._id)}>{title}</h2>
          <span><FaTimes className={`deletePage ${!show}Delete`} onClick={() => onDelete(page._id, page.pageTitle)}/></span>
          <span style={{justifySelf: 'flex-start'}}><FaMinus className={`${show}Minimize`}onClick={() => minimize(page._id)}/></span>
      </section>
      <section className='notesContainer'>
        {notes.map((note) => (
        <Notes key={note._id} note={note} deleteNote={deleteNote} trackPos={trackPos} updPos={updPos} page={page}/> ))}
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