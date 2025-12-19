import achievementsData from "@/data/achievements.json";


interface AchievementItem {
    title: string;
    position: string;
    location: string;
    date: string;
    description?: string;
}

export default function Achievements() {
    return (
        <article className="achievements active" data-page="achievements">
            <header>
                <h2 className="h2 article-title">Achievements</h2>
            </header>

            {achievementsData.map((category, index) => (
                <section key={index} className="timeline">
                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="trophy-outline"></ion-icon>
                        </div>
                        <h3 className="h3">{category.title}</h3>
                    </div>
                    <ol className="timeline-list">
                        {(category.items as AchievementItem[]).map((item, itemIndex) => (
                            <li key={itemIndex} className="timeline-item">
                                <div className="education-header">
                                    <h4 className="h4 timeline-item-title">{item.title}</h4>
                                    <span>{item.location}</span>
                                </div>
                                <div className="education-header">
                                    <span>{item.position}</span>
                                    <span>{item.date}</span>
                                </div>
                                {item.description && (
                                    <p className="timeline-text">{item.description}</p>
                                )}
                            </li>
                        ))}
                    </ol>
                </section>
            ))}
        </article>
    );
}

