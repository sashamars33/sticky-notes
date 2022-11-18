import { TiDelete } from 'react-icons/ti'
import { MdCheckBox } from 'react-icons/md'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'


const Notes = ({ page, note, deleteNote, updComp, noteId }) => {

  const show = page.selected === true ? true : false


  return (
        <div className={`note ${show}Note`} 
        style={{ display: 'flex', flexFlow: 'row wrap', padding: '1%', background: note.color}}>
        <p style={{display: 'flex', justifyContent: 'space-between', width: '100%', textAlign: 'right', paddingBottom: '5%'}}><TiDelete className='noteDelete' onClick={() => deleteNote(note._id)}/>{note.completed === false ? <MdCheckBoxOutlineBlank className='check' onClick={() => updComp(noteId, note.completed)}/> : <MdCheckBox className='check' onClick={() => updComp(noteId, note.completed)}/>}</p>
        <p>{`${note.note}`}</p>
        {/* <p style={{padding: '3% 0 0 0', width: '100%', color: '#9f9f9f'}}>{`importance: ${note.rating}`}</p> */}
        </div>
  )
}

export default Notes