interface ProjectItem {
    title: string;
    image?: string;
    description: string;
    date: string;
    github?: string;
    live?: string;
    stacks: string[];
}

import projectsData from "@/data/projects.json";

export default function Projects() {
    return (
        <article className="projects active" data-page="projects">
            <header>
                <h2 className="h2 article-title">Projects</h2>
            </header>

            <section className="projects">
                <ul className="project-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "30px" }}>
                    {(projectsData as ProjectItem[]).map((project, index) => (
                        <li key={index} className="project-item active">
                            <div className="project-card" style={{
                                background: "var(--eerie-black-2)",
                                border: "1px solid var(--jet)",
                                borderRadius: "16px",
                                padding: "20px",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column"
                            }}>
                                <figure className="project-img" style={{
                                    marginBottom: "20px",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    height: "200px"
                                }}>
                                    <img
                                        src={project.image ? `/assets/images/${project.image}` : "https://placehold.co/600x400?text=Project"}
                                        alt={project.title}
                                        loading="lazy"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </figure>

                                <div className="project-content-wrapper" style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                                        <h3 className="h3 project-item-title" style={{ margin: 0, textTransform: "none", fontSize: "18px" }}>{project.title}</h3>
                                        <div style={{ display: "flex", gap: "10px" }}>
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6", fontSize: "20px" }} title="GitHub Repo">
                                                    <ion-icon name="logo-github"></ion-icon>
                                                </a>
                                            )}
                                            {project.live && (
                                                <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: "var(--orange-yellow-crayola)", fontSize: "20px" }} title="Live Demo">
                                                    <ion-icon name="globe-outline"></ion-icon>
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "6px", marginBottom: "10px" }}>
                                        <ion-icon name="pricetag" style={{ color: "var(--orange-yellow-crayola)", fontSize: "14px" }}></ion-icon>
                                        {project.stacks.map((stack, i) => (
                                            <span key={i} style={{
                                                color: "#000",
                                                background: "#fff",
                                                padding: "1px 8px",
                                                borderRadius: "4px",
                                                fontSize: "11px",
                                                fontWeight: "600",
                                                textTransform: "uppercase"
                                            }}>{stack}</span>
                                        ))}
                                    </div>

                                    <p style={{ color: "var(--white-2)", fontSize: "13px", fontWeight: "500", marginBottom: "10px" }}>{project.date}</p>

                                    <div className="separator" style={{ margin: "12px 0", opacity: 0.3 }}></div>

                                    <p className="timeline-text" style={{ fontSize: "14px", lineHeight: "1.5", color: "var(--light-gray)", margin: 0 }}>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
}
