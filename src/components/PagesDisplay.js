import Page from './Page'

const PagesDisplay = ({pages, onDelete, toExpand, minimize, notes, deleteNote, trackPos, updPos }) => {
  

  return (
    <section className='grid pagesDisplay'>
      {pages.map((page) => (
        <Page key={page._id} title={page.pageTitle} page={page} onDelete={onDelete} 
        deleteNote={deleteNote} toExpand={toExpand} minimize={minimize} pages={pages} notes={notes} trackPos={trackPos} updPos={updPos}/>
      ))}
    </section>
  )
}

export default PagesDisplay