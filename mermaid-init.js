// How The Sims 4 Works: Mermaid set up to match the Day (light) and Night (navy) themes.
// Replaces the file `mdbook-mermaid install` writes; the build restores this copy after that step.
(() => {
    const darkThemes = ['ayu', 'navy', 'coal'];
    const lightThemes = ['light', 'rust'];
    const classList = document.documentElement.classList;
    const dark = darkThemes.some((name) => classList.contains(name));
    const fontFamily = '"Nunito", "Segoe UI", system-ui, sans-serif';

    const themeVariables = dark ? {
        darkMode: true,
        fontFamily,
        fontSize: '14px',
        background: '#142539',
        primaryColor: '#1E3550',
        primaryTextColor: '#D9E4F0',
        primaryBorderColor: '#5CC8F2',
        secondaryColor: '#182C45',
        tertiaryColor: '#0F1C2E',
        lineColor: '#93A6BC',
        textColor: '#D9E4F0',
        mainBkg: '#1E3550',
        nodeBorder: '#5CC8F2',
        clusterBkg: '#182C45',
        clusterBorder: '#2B4664',
        edgeLabelBackground: '#142539',
    } : {
        fontFamily,
        fontSize: '14px',
        background: '#FFFFFF',
        primaryColor: '#DCEBF8',
        primaryTextColor: '#1C2B3A',
        primaryBorderColor: '#1A73B8',
        secondaryColor: '#EAF3FC',
        tertiaryColor: '#F4F8FC',
        lineColor: '#5A6B7D',
        textColor: '#1C2B3A',
        mainBkg: '#DCEBF8',
        nodeBorder: '#1A73B8',
        clusterBkg: '#F4F8FC',
        clusterBorder: '#BFD9F0',
        edgeLabelBackground: '#FFFFFF',
    };
    const config = { theme: 'base', themeVariables, fontFamily, flowchart: { htmlLabels: true } };

    // Draw once the web font is in, so labels are measured in the font they are shown in.
    if (typeof mermaid.run === 'function') {
        mermaid.initialize({ ...config, startOnLoad: false });
        const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
        fontsReady.then(() => mermaid.run());
    } else {
        mermaid.initialize({ ...config, startOnLoad: true });
    }

    // Re-render in the other palette by reloading when the reader switches between a light and a dark theme.
    for (const name of darkThemes) {
        document.getElementById(name)?.addEventListener('click', () => {
            if (!dark) window.location.reload();
        });
    }
    for (const name of lightThemes) {
        document.getElementById(name)?.addEventListener('click', () => {
            if (dark) window.location.reload();
        });
    }
})();
