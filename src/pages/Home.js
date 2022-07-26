import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import StickyNotes from '../assets/StickyNotes.JPG'

const Home = ({login}) => {
  return (
    <section className='siteIntro flex'>
      <h1>Sticky Notes</h1>
      <div className='intro flex'>
        <p>Create personalized sticky-note boards where you can leave yourself importants notes, keep information, or whatever you like!</p>
        <ul className='flex'>
          <li><Link className='btn' to='/signup'>Sign up here!</Link></li>
        </ul>
      </div>
      <div className='intro-img'>
        <img src={StickyNotes} alt='Preview for Sticky Notes Site' style={{width: '75%', margin: '0 12.5%'}}></img>
      </div>
      <section id='about' className="siteInfo flex">
          <h2>About Sticky Notes</h2>
          <div>
            <p>Sticky notes is a web application designed to help you organize your quick notes, spontaneous ideas, other tidbits of information into one place. Much like a notes app but a bit more engaging!</p>
            <p>When you sign up as for sticky notes you can make a multitude of pages with various subjects of your choosing. Each of these pages is where you can create, update, and delete your notes.</p>
            <p>In the coming months I plan to some customization features including color customization, and draggablity.</p>
            <p>I hope you enjoy the site and if you have any questions, comments, or suggestions feel free to send them my way with the contact form below!</p>
          </div>
          <form className='contact-form flex'>
            <input type='text' name='fname' placeholder='Enter your first name...'></input>
            <input type='text' name='lname' placeholder='Enter your last name...'></input>
            <input type='text' name='email' placeholder='Enter your email...'></input>
            <textarea type='text' name='subject' placeholder='Enter your message...'></textarea>
            <button type='submit' name='submit'>CONTACT</button>
          </form>
    </section>
    <Footer />
    </section>
  )
}

export default Home