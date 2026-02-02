import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">

            <div className="project">
                <a href="https://main.d14jbli8kr9fvl.amplifyapp.com/" target="_blank" rel="noreferrer">
                    <img src={mock10} className="zoom" alt="EURUSYS" width="100%"/>
                </a>
                <a href="https://github.com/Harshadakokande/eurusys-contract-management-platform" target="_blank" rel="noreferrer">
                    <h2>EURUSYS Contract Management Platform</h2>
                </a>
                <p>
                    Built a full-scale contract management system using React 18 and TypeScript.
                    Implemented reusable contract blueprints and controlled lifecycle
                    (Created → Approved → Sent → Signed → Locked).
                    Used Zustand for global state management with LocalStorage persistence
                    and centralized state machine validation.
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/Harshadakokande/Stock-Trading-Platform-zerodha-clone" target="_blank" rel="noreferrer">
                    <img src={mock02} className="zoom" alt="Zerodha Clone" width="100%"/>
                </a>
                <a href="https://github.com/Harshadakokande/Stock-Trading-Platform-zerodha-clone" target="_blank" rel="noreferrer">
                    <h2>Stock Trading Platform (Zerodha Clone)</h2>
                </a>
                <p>
                    Built a responsive stock trading dashboard UI inspired by Zerodha using React and TypeScript.
                    Developed reusable components and modern layouts to simulate real-world fintech applications.
                    Focused on clean component structure and scalable frontend architecture.
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/Harshadakokande/Medconnect_plus_plus" target="_blank" rel="noreferrer">
                    <img src={mock03} className="zoom" alt="MedConnect++" width="100%"/>
                </a>
                <a href="https://github.com/Harshadakokande/Medconnect_plus_plus" target="_blank" rel="noreferrer">
                    <h2>MedConnect++ – Virtual Health Platform</h2>
                </a>
                <p>
                    Developed a full-stack healthcare platform using React, Flask, and MongoDB.
                    Integrated a Machine Learning model for disease prediction based on user symptoms.
                    Implemented appointment booking system for patients and doctors.
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/Harshadakokande/Farm-Smart-Rl" target="_blank" rel="noreferrer">
                    <img src={mock04} className="zoom" alt="FarmSmart RL" width="100%"/>
                </a>
                <a href="https://github.com/Harshadakokande/Farm-Smart-Rl" target="_blank" rel="noreferrer">
                    <h2>FarmSmart – RL for Smart Irrigation</h2>
                </a>
                <p>
                    Implemented a smart irrigation system using Reinforcement Learning to optimize water usage.
                    Designed environment with state space, action space, and reward function.
                    Trained the RL agent across multiple episodes and analyzed performance improvements.
                </p>
            </div>

        </div>
    </div>
    );
}

export default Project;
