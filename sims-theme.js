// How The Sims 4 Works: small DOM touches for the Day and Night themes (design in DESIGN-2026-10-12.md).
// Tags the page and the sidebar with the book part they belong to (colour dots, title rule), turns the Observed and
// Inferred labels into pills, marks the check line and the long tables, and trims the theme picker to Day and Night.
(() => {
    const root = document.documentElement;
    const file = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
    let page = /^\d\.\d\d/.exec(file)?.[0] ?? '';
    if (file === 'index.html') page = '0.01';
    if (file === 'glossary.html') page = 'glossary';
    if (page) root.dataset.page = page;
    const part = page === 'glossary' ? '9' : page.charAt(0);
    if (/\d/.test(part)) root.dataset.part = part;

    let current = '';
    document.querySelectorAll('.sidebar .chapter > li').forEach((li) => {
        if (li.classList.contains('part-title')) {
            current = /^\d/.exec(li.textContent.trim())?.[0] ?? '';
        }
        if (current) li.dataset.part = current;
    });

    document.querySelectorAll('main strong').forEach((el) => {
        const label = el.textContent.trim();
        if (label === 'Observed' || label === 'Inferred') {
            el.classList.add('sims-claim', `sims-claim-${label.toLowerCase()}`);
        }
    });

    const first = document.querySelector('main > h1 + p');
    const em = first?.firstElementChild;
    if (first && first.children.length === 1 && em.tagName === 'EM' &&
            first.textContent.trim() === em.textContent.trim()) {
        first.classList.add('sims-check');
    }

    document.querySelectorAll('main .table-wrapper').forEach((wrapper) => {
        if (wrapper.querySelectorAll('tbody tr').length > 40) wrapper.classList.add('sims-long');
    });

    const names = { light: 'Day', navy: 'Night' };
    for (const [id, name] of Object.entries(names)) {
        const button = document.getElementById(id);
        if (button) button.textContent = name;
    }
    for (const id of ['rust', 'coal', 'ayu']) {
        const item = document.getElementById(id)?.parentElement;
        if (item) item.style.display = 'none';
    }
})();
