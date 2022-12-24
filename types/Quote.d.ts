/**
 * Quote
 * A Quote
 */
declare interface Quote {
    id?: number;
    text: string;
    author: string;
    movieId?: number | null;
}

export { Quote };
