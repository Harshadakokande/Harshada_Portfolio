import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          {/* Research Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2025 - Aug 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Kerala, India</h4>
            <p>
              Studied and compared neuromorphic computing with GPU-based machine learning systems.
              Analyzed differences in performance, energy efficiency, and system architecture.
              Reviewed research papers and assisted in technical analysis.
            </p>
          </VerticalTimelineElement>

          {/* RuBrain */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2024 - Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Web Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">RuBrain Healthcare, Pune</h4>
            <p>
              Built frontend forms and UI components for a Health Information Management System (HIMS).
              Implemented responsive layouts using React, HTML, and CSS.
              Used Git and GitHub for version control and team collaboration.
            </p>
          </VerticalTimelineElement>

          {/* Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2022 - May 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech in Computer Science (AI/ML)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              DY Patil International University, Pune
            </h4>
            <p>
              Specialized in Artificial Intelligence and Machine Learning.
              Core areas include Frontend Development, Machine Learning, Data Science,
              and Full-Stack Web Development.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;