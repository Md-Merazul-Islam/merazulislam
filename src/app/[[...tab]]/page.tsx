import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import researchesData from "@/data/researches.json";

export default async function Page({
    params,
}: {
    params: Promise<{ tab?: string[] }>;
}) {
    const resolvedParams = await params;
    const activeTab = resolvedParams.tab?.[0] || "about";

    const renderSection = () => {
        switch (activeTab) {
            case "about":
                return <About />;
            case "skills":
                return <Skills />;
            case "education":
                return <Education />;
            case "achievements":
                return <Achievements />;
            case "experience":
                return <Experience />;
            case "projects":
                return <Projects />;
            case "research":
                return researchesData.length > 0 ? <Research /> : <About />;
            default:
                return <About />;
        }
    };

    return (
        <main>
            <Sidebar />

            <div className="main-content">
                <Navbar activeTab={activeTab} />
                {renderSection()}
            </div>
        </main>
    );
}
