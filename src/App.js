import reactLogo from './logo.svg';
import './App.css';
import About from './About'
import {Link} from 'react-router-dom';
import logo from './swimHappyLogo.jpg';

function IndexBody(){
  return(
  <a
          className="App-link"
          href="About.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          About Our Coaches
  </a>
  );
}

function Navbar(){
  return(
    <nav className='navbar'>
      <img src={logo} className='logo'></img>
      <ul>
        <li className='nav-link'><Link to='/'>Home</Link></li>
        <li className='nav-link'><Link to='/About'>About</Link></li>
      </ul>
    </nav>
  );
}


function App() {
    return (
    <div className="App">
      <Navbar />
    </div>
  );

  
}

export default App;
