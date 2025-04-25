function Education() {
    return (
        <section id="education">
        <div className="projects-header">
            <h2>Education</h2>
            <br />
            <ul style={{
                listStyle: 'none',
                padding: 0
            }}>
                <li style={{
                    marginBottom: '2rem',
                    padding: '1.5rem',
                    backgroundColor: 'white',
                    borderRadius: '6px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3498db" style={{ marginRight: '1rem' }}>
                            <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                        </svg>
                        <h3 style={{ margin: 0, color: '#2c3e50' }}>SIES(Nerul) College of Arts, Science and Commerce</h3>
                    </div>
                    <p style={{ 
                        margin: '0.5rem 0 0 2.5rem',
                        fontWeight: '500',
                        color: '#3498db'
                    }}>Bachelor of Science in Computer Science</p>
                    <p style={{ margin: '0.5rem 0 0 2.5rem', color: '#7f8c8d' }}>
                        <strong>Graduated:-</strong> May 2025
                    </p>
                    <div style={{ margin: '0.5rem 0 0 2.5rem' }}>
                        <p style={{ margin: '0.25rem 0', color: '#555' }}>
                            <strong>GPA:</strong> 9.37
                        </p>
                    </div>
                </li>
                
                <li style={{
                    padding: '1.5rem',
                    backgroundColor: 'white',
                    borderRadius: '6px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3498db" style={{ marginRight: '1rem' }}>
                            <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                        </svg>
                        <h3 style={{ margin: 0, color: '#2c3e50' }}>Don Bosco School, Nerul</h3>
                    </div>
                    <p style={{ 
                        margin: '0.5rem 0 0 2.5rem',
                        fontWeight: '500',
                        color: '#3498db'
                    }}>Class XII</p>
                    <p style={{ margin: '0.5rem 0 0 2.5rem', color: '#7f8c8d' }}>
                        <strong>Completed :-</strong> July 2022
                    </p>
                    <div style={{ margin: '0.5rem 0 0 2.5rem' }}>
                        <p style={{ margin: '0.25rem 0', color: '#555' }}>
                            <strong>Percentage:</strong> 84.4%
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        </section>
    );
}

export default Education;