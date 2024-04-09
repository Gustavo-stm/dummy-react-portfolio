import CvPic from '../assets/cv.jpg'

function Content({ option }) {

  let options = [
    {
      name: 'home', html: (<div className="col-twelve">
        <h5 className=" naugthy-children">
          Hello, World.
        </h5>
        <h1 className="naugthy-children">I'm Juan Dela Cruz.</h1>

        <p className="intro-position">
          <span>Front-end Developer</span>
          <span>UI/UX Designer</span>
        </p>

        <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>
      </div>)
    },
    {
      name: 'about', html: (<div className="col-twelve">
        <h5 className=" naugthy-children">
          This is me
        </h5>
        <h1 className="naugthy-children">...in a nutshell</h1>
        <p className="intro-position">
          Throughout the years I have acquired more and more knowledge of programming.
          Programming is not only my passion, but also my way of life.
          I am married to JS and I have one child. React.
        </p>
      </div>)
    },
    {
      name: 'resume', html: (<div className="col-twelve">
        <img id="resume-pic" onDoubleClick={() => document.exitFullscreen()} onClick={(e) => e.target.requestFullscreen()} src={CvPic} />
      </div>)
    },
    {
      name: 'experience', html: (<div className="col-twelve">
        <h5 className=" naugthy-children">
          Main Experience
        </h5>
        <p className="intro-position">
          Teacher in web dev
        </p>
        <h6 >
          Other Experience
        </h6>
        <p className="intro-position">
          #Spanish Teacher #Cake Taster #Music Lover
        </p>
      </div>)
    },
  ]
  return (
    <section id="intro">
      <div className="intro-content">
        <div className="row">
          {options && options.map(opt => {
            if (opt.name === option) {
              return opt.html
            }

          })}

        </div>
      </div>
      <ul className="intro-social">
        <li>
          <a href="#"><i className="fa fa-facebook"></i></a>
        </li>
        <li>
          <a href="#"><i className="fa fa-behance"></i></a>
        </li>
        <li>
          <a href="#"><i className="fa fa-twitter"></i></a>
        </li>
        <li>
          <a href="#"><i className="fa fa-dribbble"></i></a>
        </li>
        <li>
          <a href="#"><i className="fa fa-instagram"></i></a>
        </li>
      </ul>
    </section>
  )
}

export default Content