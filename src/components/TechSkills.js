import react from '../assets/logo192.png';
import angular from '../assets/icons8-angularjs-50.png';
import javascript from '../assets/icons8-javascript.svg';
import typescript from '../assets/icons8-typescript.svg';
import html from '../assets/icons8-html-5.svg';
import scss from '../assets/icons8-sass.svg';
import tailwind from '../assets/icons8-tailwindcss.svg';
import nodejs from '../assets/icons8-node-js.svg';
import azure from '../assets/icons8-azure.svg';
import git from '../assets/icons8-github.svg';
import redux from '../assets/icons8-redux.svg';
import css from '../assets/icons8-css3.svg';
import mongo from '../assets/icons8-mongodb-96.png';

const TechSkills = () => {
    const skills = [
        { skill: 'React', logo: { react } },
        { skill: 'Angular', logo: { angular } },
        { skill: 'JavaScript', logo: { javascript } },
        { skill: 'TypeScript', logo: { typescript } },
        { skill: 'Node.js', logo: { nodejs } },
        { skill: 'Mongodb', logo: { mongo } },

        { skill: 'HTML', logo: { html } },
        { skill: 'SCSS', logo: { scss } },
        { skill: 'Tailwind', logo: { tailwind } },
        { skill: 'Azure', logo: { azure } },
        { skill: 'Git', logo: { git } },
        { skill: 'Redux', logo: { redux } },
        { skill: 'CSS', logo: { css } },
    ];


    return (
        <section className="tech-skills" id="tech-skills">
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
            <div className="skills-marquee">
                <div className="skills-track">
                    {skills.concat(skills).map((item, index) => (
                        <span key={index} className="skill-item">
                            <span className="skill-logo">
                                <img
                                    src={Object.values(item.logo)[0]}
                                    alt={item.skill}
                                    className="skill-logo-img"
                                />
                            </span>
                            <span className="skill-name">{item.skill}</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechSkills;