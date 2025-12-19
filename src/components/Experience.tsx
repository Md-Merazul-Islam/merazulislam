import experiencesData from "@/data/experiences.json";


export default function Experience() {
    return (
        <article className="experience active" data-page="experience">
            <header>
                <h2 className="h2 article-title">Experience</h2>
            </header>

            <section className="timeline">
                <ol className="timeline-list">
                    {experiencesData.map((exp, index) => (
                        <li key={index} className="timeline-item">
                            <div className="education-header">
                                <h4 className="h4 timeline-item-title">{exp.company}</h4>
                                <span>{exp.duration}</span>
                            </div>
                            <h5 className="h5 timeline-item-subtitle">{exp.position}</h5>
                            <p className="timeline-text">{exp.description}</p>
                            {exp.projects && exp.projects.length > 0 && (
                                <ul className="timeline-list">
                                    {exp.projects.map((project, pIndex) => (
                                        <li key={pIndex} className="timeline-item">
                                            <p className="timeline-text">• {project}</p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ol>
            </section>
        </article>
    );
}
