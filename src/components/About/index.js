import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import { useEffect, useState } from "react";
import Loader from 'react-loaders'
import {
    faPython,
    faGitAlt,
    faJava,
    faJsSquare,
    faReact,
    faSwift,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2500);
  
    return () => {
      clearTimeout(timeoutId);
    };
  }, [setLetterClass]);

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">


        <h1>
          <AnimatedLetters letterClass={letterClass}
            strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
            idx={15}
            className={letterClass} 
          />
        </h1>
        <p>
          As a sophomore computer science student, I am excited to bring my enthusiasm and strong foundation in programming to any organization. Despite being early in my college career, I have already completed projects in many languages ranging from Java to Swift, showcasing my dedication to learning and growing in the field. I am always eager to learn and tackle new challenges, and I am confident that my passion and strong work ethic will make me a valuable asset to any team.
        </p>
      </div>
      <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSwift} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
    </div>
    <Loader type ='pacman'/>
   </>

  )
}

export default About
