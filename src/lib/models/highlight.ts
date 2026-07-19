/**
 * Highlights occurrences of a search query in the page's content column, so
 * that arriving from a search result shows what matched.
 *
 * This uses the CSS Custom Highlight API rather than wrapping text in <mark>
 * elements, so that it never mutates DOM that Svelte owns. See ::highlight() in
 * static/css/global.css for the styling.
 */
export default function highlight(query: string | null): void {
    if (typeof CSS === 'undefined' || !('highlights' in CSS)) return;

    CSS.highlights.delete('search');

    const text = query?.trim().toLowerCase();
    if (text === undefined || text.length === 0) return;

    const content = document.querySelector('.content');
    if (content === null) return;

    const ranges: Range[] = [];
    const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
        const node = walker.currentNode;
        const candidate = node.textContent?.toLowerCase();
        if (candidate === undefined) continue;
        let index = candidate.indexOf(text);
        while (index >= 0) {
            const range = document.createRange();
            range.setStart(node, index);
            range.setEnd(node, index + text.length);
            ranges.push(range);
            index = candidate.indexOf(text, index + text.length);
        }
    }

    if (ranges.length > 0)
        CSS.highlights.set('search', new Highlight(...ranges));
}
