import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "MongoDB",
    "Flask",
    "FastAPI",
    "REST APIs",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub",
    "Responsive UI",
    "Component Architecture",
    "UI/UX",
    "Project Structure",
];

const labelsThird = [
    "Python",
    "Reinforcement Learning",
    "Machine Learning",
    "Neuromorphic Computing",
    "GPU Computing",
    "Data Analysis",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend & Full Stack Development</h3>
                    <p>
                        I have hands-on experience building responsive and scalable web applications using React, 
                        TypeScript, and Flask. I have worked on real-world projects like healthcare platforms 
                        and fintech dashboards with clean component-based architecture and REST API integration.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Software Engineering Practices</h3>
                    <p>
                        I follow good software engineering practices such as modular code structure, 
                        version control using Git and GitHub, and building maintainable UI systems. 
                        I have experience collaborating in teams and working on real internship projects.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI, ML & Research</h3>
                    <p>
                        I have research and project experience in Artificial Intelligence and Machine Learning, 
                        including Reinforcement Learning and comparative studies on neuromorphic computing 
                        vs GPU-based systems. I enjoy building intelligent systems and experimenting with ML models.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;
