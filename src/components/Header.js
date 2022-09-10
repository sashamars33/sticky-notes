import {useState} from 'react'
import { FaUserCircle } from 'react-icons/fa'



const Header = ({ pages, onAdd }) => {

const [pageTitle, setPageTitle] = useState('')

console.log(pages, pages.map(page => page.title.toLowerCase()))

const pagesLower = pages.map(page => page.title.toLowerCase());

const onSubmit = (e) => {
  // pages = pages.map(page => page.title.toLowerCase());

  e.preventDefault();

  if(!pageTitle){
    alert('Please add a page title.')
    return
  }else if(pagesLower.includes(pageTitle.toLowerCase())){
    alert('Page title already exists, please pick another title.')
    return
  }

  onAdd({pageTitle});

  setPageTitle('')
}

pages = pages.map(page => page = page.selected)

const show = pages.includes(true)

  return (
    <div className={`${show}NewPageForm`}>
      <h1 style={{padding: '0 0 5% 0', borderBottom: 'solid 2px #f5f5f520'}}>Sticky Notes</h1>
      <ul className={`flex headingUl`}>
         <li><form onSubmit={onSubmit} className={`newPageForm flex`}>
            <input className="input" type = "text" placeholder = "add a new page... " value={pageTitle} onChange={(e) => setPageTitle(e.target.value)}></input>
            <input className="button" type="submit" value="+">
            </input>

          </form></li>
        <li><FaUserCircle /></li>
      </ul>
    </div>
  )
}

export default Header