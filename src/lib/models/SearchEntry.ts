/** One searchable chunk of rendered site content, derived from the prerendered HTML. */
type SearchEntry = {
    /** Absolute path to the page, with an #anchor when the content has one. */
    url: string;
    /** The title of the page the content appears on. */
    page: string;
    /** The nearest heading above the content, if any. */
    heading: string;
    /** The content itself, as rendered text. */
    text: string;
};

export { type SearchEntry as default };
