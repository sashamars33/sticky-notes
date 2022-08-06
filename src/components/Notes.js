import { TiDelete } from 'react-icons/ti'
import Draggable from 'react-draggable'
import { useState, useLayoutEffect, useRef } from 'react'

const Notes = ({ page, note, deleteNote, trackPos, updPos }) => {

    const show = page.selected === true ? true : false

    const ref = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
        setHeight(ref.current.offsetHeight);
    }, []);

  return (
    <Draggable bounds='parent' onDrag={(e, data) =>{
     trackPos(e, data);updPos(page.pageTitle, data, note.note)}
     }>
        <div className={`note ${show}Note`} ref={ref} style={{ padding: '2%', position: 'absolute', top: note.position.y + 'px', left: note.position.x + 'px', bottom: note.position.y + {width}, right: note.position.y + {height}, background: note.color}}>
            <p><TiDelete className='noteDelete' onClick={() => deleteNote(page.pageTitle, note.note, note._id)}/>{`   ${note.note}`}</p>
        </div>
    </Draggable>
  )
}

export default Notes