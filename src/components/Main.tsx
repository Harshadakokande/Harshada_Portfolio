import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require('../assets/images/img.png')} alt="Harshada Kokande" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Harshadakokande" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/harshada-kokande-533718256/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Harshada Kokande</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Harshadakokande" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/harshada-kokande-533718256/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;