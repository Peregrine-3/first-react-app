import logo from './logo.svg';
import './App.css';
import About from './About'
import {Link} from 'react-router-dom';

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


function App() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='menu'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
          </ul>
        </div>
       <IndexBody /> 
      </header>
    </div>
  );

  
}

export default App;
