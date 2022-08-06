import { FaMoon } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
import { FaCog  } from 'react-icons/fa'
import { FaSun } from 'react-icons/fa'

const Header = ({ pages }) => {

pages = pages.map(page => page = page.selected)

const show = pages.includes(true)

  return (
    <div className={`${show}NewPageForm`}>
      <h1 style={{padding: '0 0 5% 0', borderBottom: 'solid 2px #f5f5f520'}}>Sticky Notes</h1>
      <ul className={`flex headingUl`}>
         <li><form action="../../../pages" method= "POST" className={`newPageForm flex`}>
            <input type = "text" placeholder = "add a new page... " name = "pageTitle"></input>
            <button type="submit">
            +</button>

          </form></li>
        <li><FaMoon /></li>
        <li><FaCog /></li>
        <li><FaUserCircle /></li>
      </ul>
    </div>
  )
}

export default Header