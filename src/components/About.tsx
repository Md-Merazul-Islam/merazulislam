import aboutData from "@/data/about.json";


export default function About() {
    return (
        <article className="about active" data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                {aboutData.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </section>
        </article>
    );
}
