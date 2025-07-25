import milahi from '../assets/milahi-logo.svg';
import atlp from '../assets/logoold.svg';
import margo from '../assets/margo.webp';
import travelers from '../assets/travelers.png';
const projects = [
    {
        name: 'Milahi',
        description: 'An internal dashboard and tracking application for managing vessels, containers and their respective movements.',
        company: 'ADPORTS Group',
        image: { milahi }
    },
    {
        name: 'ATLP',
        description: 'A single window applicationn that facilitates trade through sea, air, industrial and free zones.',
        company: 'ADPORTS Group',
        image: { atlp }
    },
    {
        name: 'Margo',
        description: 'A courier delivery system that allows you to book, track and manage deliveries.',
        company: 'ADPORTS Group',
        image: { margo }
    },
    {
        name: 'Travelers',
        description: 'An insurance management system that allows you to manage policies, claims and customers.',
        company: 'Accenture',
        image: { travelers }
    },
];

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <div className="project-image">
                            <img
                                src={project.image[Object.keys(project.image)[0]]}
                                alt={project.name}
                                style={{ width: '120px', height: '120px', objectFit: 'contain' }}
                            />
                        </div>
                        <div className="project-details">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <p>{project.company}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;