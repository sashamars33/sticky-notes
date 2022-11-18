import { useState } from 'react'

const NewNoteForm = ({ page, onAdd }) => {

    const show = page.selected === true ? true : false

    const [note, setNote] = useState('');
    const [rating, setRating] = useState(1)

    const onSubmit = (e) => {
      e.preventDefault()

      if(!note){
        alert('Please type a note.')
        return
      }
      if(!rating || rating > 5 || rating <= 0){
        alert('Please enter a valid rating.')
        return
      }
      onAdd({note, page, rating})

      setNote('')
      setRating(1)
    }

    function refreshPage(){
      window.location.reload(false)
    }


  return (
    <div className={`noteFormContainer ${show}NewNotes`}>
        <form onSubmit={onSubmit}className='contact-form flex'>
            <label style={{color: '#050505'}}>Create Note</label>
            <textarea className="input" type = "text" placeholder = "add a new note... " value={note} onChange={(e) => setNote(e.target.value)}></textarea>
            {/* <input type = "text" name='page' readOnly value={page._id} className='hidden'></input> */}
            <label style={{color: '#050505'}}>Importance (5 (most) - 1 (least))</label>
            <input className="" type='text' placeholder='1(least) - 5(most)' value={rating} onChange={(e) => setRating(e.target.value)}></input>
             

            <input onClick={refreshPage} type="submit"></input>
            
        </form>
        {/* <span onClick = {() => minimize(page._id)}>Go back to Pages</span> */}
    </div>
  )
}

export default NewNoteForm