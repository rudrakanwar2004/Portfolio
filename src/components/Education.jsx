import React from 'react';
import '../education.css';

function Education() {
    return (
        <section id="education" className="education-section">
            <div className="projects-header">
                <h2>Education</h2>
                <br />
                <ul className="education-list">
                    <li className="education-item">
                        <div className="education-header">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="education-icon">
                                <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                            </svg>
                            <h3 className="education-title">SIES(Nerul) College of Arts, Science and Commerce</h3>
                        </div>
                        <p className="education-subtitle">Bachelor of Science in Computer Science</p>
                        <p className="education-info"><strong>Graduated:-</strong> May 2025</p>
                        <div className="education-details">
                            <p className="education-percentage"><strong>GPA:</strong> 9.37</p>
                        </div>
                    </li>
                    
                    <li className="education-item">
                        <div className="education-header">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="education-icon">
                                <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                            </svg>
                            <h3 className="education-title">Don Bosco School, Nerul</h3>
                        </div>
                        <p className="education-subtitle">Class XII</p>
                        <p className="education-info"><strong>Completed :-</strong> July 2022</p>
                        <div className="education-details">
                            <p className="education-percentage"><strong>Percentage:</strong> 84.4%</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Education;
