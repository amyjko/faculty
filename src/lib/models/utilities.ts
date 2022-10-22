
export function scrollToElement(element: HTMLElement) {
    window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' });
}

export function scrollToHash() {
    // Scroll to the element if there is one.
    if(window.location.hash.length > 0) {
        let element = document.getElementById(window.location.hash.substring(1));
        if(element) {
            scrollToElement(element);
        }
    }
}
