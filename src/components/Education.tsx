interface EducationItem {
    institution: string;
    degree: string;
    duration: string;
    gpa?: string;
    description?: string;
    courses?: string[];
}

import educationData from "@/data/education.json";


export default function Education() {
    return (
        <article className="education active" data-page="education">
            <header>
                <h2 className="h2 article-title">Education</h2>
            </header>

            <section className="timeline">
                <ol className="timeline-list">
                    {(educationData as EducationItem[]).map((school, index) => (
                        <li key={index} className="timeline-item">
                            <h4 className="h4 timeline-item-title">{school.institution}</h4>
                            <span>{school.duration}</span>
                            <h5 className="h5 timeline-item-subtitle">{school.degree}</h5>
                            {school.gpa && <p className="timeline-text">{school.gpa}</p>}
                            {school.description && (
                                <p className="timeline-text">{school.description}</p>
                            )}
                            {school.courses && school.courses.length > 0 && (
                                <ul className="timeline-text" style={{ listStyleType: "disc", marginLeft: "20px" }}>
                                    {school.courses.map((course: string, courseIndex: number) => (
                                        <li key={courseIndex}>{course}</li>
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
