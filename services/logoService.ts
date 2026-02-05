export const GENERIC_LOGO = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=128&auto=format&fit=crop";

export const getLogo = (domain: string) => {
    if (!domain || domain.includes('example.com')) return GENERIC_LOGO;

    // Clean up corrupted domains commonly found in the dataset (e.g., .com.com, .ua.com)
    let cleanDomain = domain.toLowerCase()
        .replace(/\.com\.com$/, '.com')
        .replace(/\.ua\.com$/, '.ua')
        .replace(/\.co\.uk\.com$/, '.co.uk')
        .replace(/\.net\.au\.com$/, '.net.au')
        .replace(/\.co\.nz\.com$/, '.co.nz')
        .replace(/\.org\.com$/, '.org');

    // Use Google's favicon service with a larger size (128px) for better quality
    return `https://www.google.com/s2/favicons?sz=128&domain=${cleanDomain}`;
};
