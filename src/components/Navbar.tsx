import Link from "next/link";
import researchesData from "@/data/researches.json";

interface NavbarProps {
    activeTab: string;
}

export default function Navbar({ activeTab }: NavbarProps) {
    const tabs = [
        "About",
        "Skills",
        "Education",
        "Achievements",
        "Experience",
        "Projects",
        ...(researchesData.length > 0 ? ["Research"] : []),
    ];

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {tabs.map((tab) => (
                    <li key={tab} className="navbar-item">
                        <Link
                            href={`/${tab.toLowerCase()}`}
                            className={`navbar-link ${activeTab.toLowerCase() === tab.toLowerCase() ? "active" : ""
                                }`}
                        >
                            {tab}
                        </Link>
                    </li>
                ))}


            </ul>
        </nav>
    );
}

