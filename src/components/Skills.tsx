import skillsData from "@/data/skills.json";

export default function Skills() {
    return (
        <article className="skills active" data-page="skills">
            <header>
                <h2 className="h2 article-title">Skills</h2>
            </header>

            {skillsData.map((category, index) => (
                <section key={index} className="timeline">
                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="code-slash-outline"></ion-icon>
                        </div>
                        <h3 className="h3">{category.name}</h3>
                    </div>

                    <div className="skills-list">
                        {category.stacks.map((stack, stackIndex) => (
                            <div
                                key={stackIndex}
                                style={{ float: "left", marginRight: "8px", marginBottom: "8px" }}
                            >
                                <img
                                    alt={stack.name}
                                    style={{ float: "left" }}
                                    src={stack.badge}
                                />
                            </div>
                        ))}
                    </div>
                    <div style={{ clear: "both" }}></div>
                    {index < skillsData.length - 1 && <hr className="separator" />}
                </section>
            ))}
        </article>
    );
}
