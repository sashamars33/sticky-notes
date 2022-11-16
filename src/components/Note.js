import { TiDelete } from 'react-icons/ti'
import Draggable from 'react-draggable'
import { useState, useLayoutEffect, useRef } from 'react'

const Notes = ({ page, note, deleteNote, trackPos, updPos }) => {

    const show = page.selected === true ? true : false

    // const ref = useRef(null);

    // const [width, setWidth] = useState(0);
    // const [height, setHeight] = useState(0);

    // useLayoutEffect(() => {
    //     setWidth(ref.current.offsetWidth);
    //     setHeight(ref.current.offsetHeight);
    // }, []);

  return (
    // <Draggable bounds='parent' onDrag={(e, data) =>{
    //  trackPos(e, data);
    //  updPos(data, note._id)}
    //  }>
        <div className={`note ${show}Note`} 
        // ref={ref} 
        style={{ display: 'flex', flexFlow: 'row wrap', padding: '5%', background: note.color}}>
        <p style={{width: '100%', textAlign: 'right', paddingBottom: '1%'}}><TiDelete className='noteDelete' onClick={() => deleteNote(note._id)}/></p>
        <p>{`${note.note}`}</p>
        </div>
    // </Draggable>
  )
}

export default Notes