import { SimpsonsQuote } from "@/types/promiseTypes";




export const fetchQuotes = async (): Promise<SimpsonsQuote > => {
    const respo = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const data = await respo.json();

    return data[0];
}
