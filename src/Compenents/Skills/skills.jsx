import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import webDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
import Html from '../../assets/HTML 5.png'
import cimage from '../../assets/CSS 3.png'
import jimage from '../../assets/JAVASCRIPT.png'
import bimage from '../../assets/BOOTSTRAP.png'
import rimage from '../../assets/React.png'





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
               
                <div className="skillbartext">
                    <h2>WEB DESIGN</h2>
                    <p>My Skills</p>
                    <div className="skillcards">
                        <div className="card">
                            <img src={Html} alt="" />
                            <h3>HTML</h3>
                        </div>
                        <div className="card">
                            <img src={cimage} alt="" />
                            <h3>CSS</h3>
                        </div>
                        <div className="card">
                            <img src={jimage} alt="" />
                            <h3>JAVASCRIPT</h3>
                        </div>
                        <div className="card">
                            <img src={bimage} alt="" />
                            <h3>BOOTSTRAP</h3>
                        </div>
                        <div className="card">
                            <img src={rimage} alt="" />
                            <h3>REACT</h3>
                        </div>

                    </div>
                </div>
            </div>
           
           </div>
   </section>
  )
}

export default Skills