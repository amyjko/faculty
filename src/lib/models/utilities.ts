export function parseDate(dateString: string) {
    let parts = dateString.split("-");
    return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
}

export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type MonthDate = { month: Month, date: number };

export function parseMonthDate(dateString: string): MonthDate {
    let parts = dateString.split("-");
    return {
        month: parseInt(parts[0]) as Month,
        date: parseInt(parts[1])
    };
}

export function scrollToElement(element: HTMLElement) {
    window.scrollTo({ top: element.getBoundingClientRect().top - window.innerHeight / 2, behavior: 'smooth' });
}

export function scrollToHash() {
    // Scroll to the element if there is one.
    if(window.location.hash.length > 0) {
        let element = document.getElementById(window.location.hash.substring(1));
        if(element)
            scrollToElement(element);
    }
}
