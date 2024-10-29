import React from 'react'
import './works.css'
import Project1 from '../../assets/Screenshot e.png'
import project2 from '../../assets/Screenshot M.png'
import project3 from '../../assets/Screenshot T.png'
import project4 from '../../assets/Screenshot EB.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'
import Go from '../../assets/go-to.png'


const Works = () => {
  return (
    <section id="works">
       <h2 className="workstitle">MY Projects</h2>
       <span className="worksdesc">Explore my projects to see a range of solutions I’ve developed,
         each tailored to meet specific needs and challenges. From interactive web applications to 
         efficient software tools, my work highlights my technical skills, creativity, and commitment
          to delivering impactful results that drive value and innovation.</span>
          <div className="worksimgs">
            <div className="workimg">
            <img src={Project1} alt="" className="img" />
            <hr />
            <div className="txt">
              <h3>Styles Nest</h3> 
              <a href="https://styles-nest.vercel.app/"><p>live link at <img className='i' src={Go} alt="" /></p></a>
            </div>
            </div>
            <div className="workimg">
            <img src={project2} alt="" className="img" />
            <hr />
            <div className="txt">
              <h3>Meme-Generator</h3> 
              <a href="https://meme-generator-zeta-wheat.vercel.app/"><p>live link at <img className='i' src={Go} alt="" /></p></a>
            </div>
            </div>
            <div className="workimg">
            <img src={project3} alt="" className="img" />
            <hr />
            <div className="txt">
              <h3>To-Do App</h3> 
              <a href="https://to-do-list-rho-fawn.vercel.app/"><p>live link at <img className='i' src={Go} alt="" /></p></a>
            </div>
            </div>
            <div className="workimg">
            <img src={project4} alt="" className="img" />
            <hr />
            <div className="txt">
              <h3>Easy-Bank Landing Page</h3> 
              <a href="https://easy-bank-one-beta.vercel.app/"><p>live link at <img className='i' src={Go} alt="" /></p></a>
            </div>
            </div>
            <div className="workimg">
            <img src={Project1} alt="" className="img" />
            <hr />
            <div className="txt">
              <h3>Styles Nest</h3> 
              <a href="https://styles-nest.vercel.app/"><p>live link at <img className='i' src={Go} alt="" /></p></a>
            </div>
            </div>
            <div className="workimg">
            <img src={Project1} alt="" className="img" />
            <hr />
            <div className="txt">
              <h3>Styles Nest</h3> 
              <a href="https://styles-nest.vercel.app/"><p>live link at <img className='i' src={Go} alt="" /></p></a>
            </div>
            </div>
          </div>
          <button className="workbtn">See More</button>
    </section>
  )
}

export default Works