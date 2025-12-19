import researchesData from "@/data/researches.json";

interface ResearchItem {
    title: string;
    subtitle?: string;
    coauthors: string[];
    description: string;
    keywords?: string[];
}

export default function Research() {
    return (
        <article className="research active" data-page="research">
            <header>
                <h2 className="h2 article-title">Research</h2>
            </header>

            <section className="timeline">
                <ol className="timeline-list">
                    {(researchesData as ResearchItem[]).map((research, index) => (
                        <li key={index} className="timeline-item">
                            <div className="education-header">
                                <h4 className="h4 timeline-item-title">{research.title}</h4>
                                {research.subtitle && <span>{research.subtitle}</span>}
                            </div>
                            <h5 className="h5 timeline-item-subtitle">
                                Co-authors: {research.coauthors.join(", ")}
                            </h5>
                            <p className="timeline-text">{research.description}</p>
                            {research.keywords && (
                                <p className="timeline-text" style={{ fontSize: "14px", marginTop: "10px" }}>
                                    Keywords: {research.keywords.join(", ")}
                                </p>
                            )}
                        </li>
                    ))}
                </ol>
            </section>
        </article>
    );
}

