import { useState } from 'react'

const NewNoteForm = ({ page, onAdd }) => {

    console.log(page)

    const show = page.selected === true ? true : false

    const [note, setNote] = useState('');

    const onSubmit = (e) => {
      e.preventDefault()

      if(!note){
        alert('Please type a note.')
        return
      }
      onAdd({note, page})

      setNote('')
    }


  return (
    <div className={`noteFormContainer ${show}NewNotes`}>
        <form onSubmit={onSubmit}className='newNoteForm flex'>
            <input className="input" type = "text" placeholder = "add a new note... " value={note} onChange={(e) => setNote(e.target.value)}></input>
            {/* <input type = "text" name='page' readOnly value={page._id} className='hidden'></input> */}
            <input className="hidden" type="submit">
            </input>
        </form>
        {/* <span onClick = {() => minimize(page._id)}>Go back to Pages</span> */}
    </div>
  )
}

export default NewNoteForm