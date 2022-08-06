

const NewNoteForm = ({ page, pageTitle }) => {

    const show = page.selected === true ? true : false

  return (
    <div className={`noteFormContainer ${show}NewNotes`}>
        <form action="../../../notes" method= "POST" className='newNoteForm flex'>
            <input type = "text" placeholder = "add a new note... " name = "note"></input>
            <input type = "text" name='page' value={pageTitle} className='hidden'></input>
            <button className="hidden" type="submit">
            </button>
        </form>
    </div>
  )
}

export default NewNoteForm