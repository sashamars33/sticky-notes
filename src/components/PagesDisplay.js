import Page from './Page'


const PagesDisplay = ({pages, onDelete, expand, deleteNote, minimize, notes, trackPos, updPos, onAdd, logout}) => {
  



  return (
    <>
      <section className='grid pagesDisplay'>
        {
        pages.map((page, ix) => (
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
          onAdd={onAdd}
          i={ix}/>
          
        ))}
      </section>
    </>
  )
}

export default PagesDisplay