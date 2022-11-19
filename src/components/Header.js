import {useState} from 'react'



const Header = ({ pages, onAdd }) => {

const [pageTitle, setPageTitle] = useState('')

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

function refreshPage(){
  window.location.reload(false)
}


  return (
    <div className={`${show}NewPageForm`}>
      <ul className={`flex headingUl`}>
         <li><form onSubmit={onSubmit} className={`newPageForm flex`}>
            <input className="input" type = "text" placeholder = "add a new page... " value={pageTitle} onChange={(e) => setPageTitle(e.target.value)}></input>
            <button onClick={refreshPage} className="button" type="submit" style={{margin: 0, padding: 0}}>+
            </button>
          </form></li>
      </ul>
    </div>
  )
}

export default Header