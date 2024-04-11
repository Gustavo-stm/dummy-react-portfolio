function Header({ setOption }) {


  return (
    <header>
      <div className="row">
        <div className="top-bar">
          <nav id="main-nav-wrap">
            <ul className="main-navigation">
              <li className="current showing">
                <a className="smoothscroll" onClick={() => setOption('home')} href="#intro" title="">Home</a>
              </li>
              <li><a className="smoothscroll" onClick={() => setOption('about')} href="#about" title="">About</a></li>
              <li>
                <a className="smoothscroll" onClick={() => setOption('resume')} title="">Resume</a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio" title="">Portfolio</a>
              </li>
              <li>
                <a className="smoothscroll" onClick={() => setOption('experience')} title="">Experience</a>
              </li>
              <li>
                <a className="smoothscroll" onClick={() => setOption('contact')} title="">Contact</a>
              </li>
              <li><a href="#" onClick={() => setOption('demo')}>Demo</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header