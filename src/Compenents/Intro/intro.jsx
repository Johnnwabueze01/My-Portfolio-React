import React from 'react';
import './intro.css';
import bg from '../../assets/johnny.jpg';
import btnimg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introcontent">
            <span className="hello">Hello,</span>
            <span className="introtext">I'm <span className="introname">John</span><br />website Designer</span>
            <p className="intropara">I am a skilled web developer with experience in creating <br /> visually appealing and user friendly websites.</p>
            <Link><button className="btn"><img src={btnimg} alt="hireme" className='btnimg' />Hire Me</button></Link>
        </div>
        <img src={bg} alt="Portfolio" className='bg' />
    </section>
  );
}

export default Intro;
