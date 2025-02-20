import React from 'react';
import './intro.css';
import bg from './../../assets/image.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png'
const Intro = () => {
    return (
        <div>
            <section id="intro">
                <div className="introContent">
                    <span className="hello">Hello,</span>
                    <span className="introText">I'm <span className="introName">Soubhik</span><br/>Full-Stack Developer</span>
                    <p className="introPara">with a passion for software engineering and web development.<br/> Despite being new to the industry, he showcases strong skills in<br/> front-end development, React.js, and full-stack technologies.</p>

                    <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>

                </div>
                <img src={bg} alt="profile" className="bg"/>
            </section>
            
        </div>
    );
};

export default Intro;