import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const categories = [
        '',
        'about',
        'skills',
        'education',
        'achievements',
        'experience',
        'projects',
        'research',
    ];

    return categories.map((cat) => ({
        url: `http://localhost:3000/${cat}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: cat === '' || cat === 'about' ? 1 : 0.8,
    }));
}
