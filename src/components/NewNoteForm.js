import { useState } from 'react'

const NewNoteForm = ({ page, pageTitle, onAdd}) => {

    const show = page.selected === true ? true : false

    const [note, setNote] = useState('');

    const onSubmit = (e) => {
      e.preventDefault()

      if(!note){
        alert('Please type a note.')
        return
      }

      onAdd({note, pageTitle})

      setNote('')
    }


  return (
    <div className={`noteFormContainer ${show}NewNotes`}>
        <form onSubmit={onSubmit}className='newNoteForm flex'>
            <input className="input" type = "text" placeholder = "add a new note... " value={note} onChange={(e) => setNote(e.target.value)}></input>
            <input type = "text" name='page' readOnly value={pageTitle} className='hidden'></input>
            <button className="hidden" type="submit">
            </button>
        </form>
    </div>
  )
}

export default NewNoteForm