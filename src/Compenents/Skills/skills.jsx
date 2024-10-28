import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import webDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
   <section id="skills">
    <span className="skilltitle">what I do</span>
    <span className="skilldesc">A front-end developer skilled in building responsive and interactive
         web applications using HTML, CSS, and JavaScript frameworks like React and Angular. Proficient 
         in creating cross-browser compatible layouts and optimizing web performance. Experienced in version
          control (Git) and agile workflows, with a focus on writing clean, efficient code for seamless user
           experiences.</span>
           <div className="skillbars">
            <div className="skillbar">
                <img src={UIDesign} alt="" className="skillbarimg" />
                <div className="skillbartext">
                    <h2>UI/UX DESIGN</h2>
                    <p>This is a Demo text</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={webDesign} alt="" className="skillbarimg" />
                <div className="skillbartext">
                    <h2>WEB DESIGN</h2>
                    <p>This is a Demo text</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={AppDesign} alt="" className="skillbarimg" />
                <div className="skillbartext">
                    <h2>APP DESIGN</h2>
                    <p>This is a Demo text</p>
                </div>
            </div>
           </div>
   </section>
  )
}

export default Skills