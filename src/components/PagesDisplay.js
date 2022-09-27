import Page from './Page'
import { Link } from 'react-router-dom'


const PagesDisplay = ({pages, onDelete, expand, deleteNote, minimize, notes, trackPos, updPos, onAdd, logout}) => {
  
  console.log(pages)

  return (
    <section className='grid pagesDisplay'>
      {pages.map((page) => (
        <Page key={page._id} 
        title={page.title} 
        page={page} 
        onDelete={onDelete} 
        deleteNote={deleteNote} 
        expand={expand} 
        minimize={minimize} 
        pages={pages} 
        notes={notes} 
        trackPos={trackPos} 
        updPos={updPos} 
        onAdd={onAdd}/>
      ))}
      <Link to='/logout' onClick={() => logout()}>Logout</Link>
    </section>
  )
}

export default PagesDisplay