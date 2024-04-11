import CvPic from '../assets/cv.jpg'
import acrobatIcon from '../assets/acrobat-icon.svg'
import { useState } from 'react'

import {
  Input, FormControl, InputLabel, FormHelperText, Stack, Button
} from "@mui/material";
function Content({ option, setOption }) {

  const [mouseoverExperience, setExperience] = useState(false)
  const [secondaryExperience, setSecondaryExperience] = useState(false)

  let options = [
    {
      name: 'home', html: (<div className="col-twelve">
        <h5 className=" naugthy-children">
          Hello, World.
        </h5>
        <h1 className="naugthy-children">I am Gustavo Catala.</h1>

        <p className="intro-position">
          <span>Front-end Developer</span>
          <span>Web Dev Instructor</span>
        </p>

        <a className="button stroke smoothscroll" onClick={() => setOption('about')} title="">More About Me</a>
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
      name: 'resume', html: (<div id="portfolio" className="col-twelve">
        <img id="resume-pic" onDoubleClick={() => document.exitFullscreen()} onClick={(e) => e.target.requestFullscreen()} src={CvPic} />
        <ul>
          <li onClick={() => window.open('/resume.pdf', '_blank')}><span>Load pdf</span><img src={acrobatIcon} /></li>
          <li><a style={{ textDecoration: 'none', color: 'white' }} href="/resume.pdf" download="resume.pdf">Download</a></li>
        </ul>
      </div>)
    },
    {
      name: 'experience', html: (<div className="col-twelve" id='experience'>
        <h5 onMouseOver={() => setExperience(true)} onMouseOut={() => setExperience(false)} className=" naugthy-children">
          Main Experience {mouseoverExperience ? <i>&uarr;</i> : <i>&darr;</i>}
        </h5>
        <p style={{ animation: 'fading 2s forwards' }}>
          Teacher in web dev
        </p>
        {/* {mouseoverExperience && <p style={{ animation: 'fading 2s forwards' }} className="intro-position">
          Teacher in web dev
        </p>}
        <h6 onMouseOver={() => setSecondaryExperience(true)} onMouseOut={() => setSecondaryExperience(false)}>
          Other Experience {secondaryExperience ? <i>&uarr;</i> : <i>&darr;</i>}
        </h6>
        {secondaryExperience && <p style={{ animation: 'fading 2s forwards' }} className="intro-position">
          #Spanish Teacher #Cake Taster #Music Lover
        </p>} */}
      </div>)
    },
    {
      name: 'contact', html: (<form onSubmit={() => alert('hello')} style={{ borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', paddingTop: "15%", height: '400px', width: '400px', margin: '0 auto' }}>
        <Stack spacing={2} direction="row" justifyContent="flex-start" sx={{ marginBottom: 6 }} >
          <FormControl justifyContent="flex-start">
            <InputLabel htmlFor="fname" color="info">First Name</InputLabel>
            <Input
              autoFocus={true}
              id="fname"
            // onChange={(e) => setFirstName(e.target.value)}
            />
            <FormHelperText color={"error"} id="my-helper-text">
              Please enter your first name.
            </FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="lname">Last Name</InputLabel>
            <Input
              id="lname"
            // onChange={(e) => setLastName(e.target.value)}
            />
            <FormHelperText id="my-helper-text">
              Please enter your last name.
            </FormHelperText>
          </FormControl>
        </Stack>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 6 }}>
          <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input
              id="email"
              aria-describedby="my-helper-text"
            // onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText id="my-helper-text">
              We will never share your email.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="phnNumber">Phone Number</InputLabel>
            <Input
              id="phnNumber"
              aria-describedby="my-helper-text"
            // onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <FormHelperText id="my-helper-text">
              Please enter your phone number here.
            </FormHelperText>
          </FormControl>
        </Stack>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 6 }}>
          <Button type="submit" variant="contained">
            Contact
          </Button>
        </Stack>
      </form>)
    },
    {
      name: 'demo', html: (<div className="col-twelve">
        <h5 style={{ marginBottom: '10px' }}>JS Fundamentals</h5>
        <iframe width="595" height="350" src="https://www.youtube.com/embed/092gBR3HNJI?controls=0"></iframe>
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