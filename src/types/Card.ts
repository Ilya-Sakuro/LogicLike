export type Card = {
    name: string;
    id: string;
    image: string;
    bgColor: string;
    tags?: Array<string>;
};
export type CardPops = {
    cards: Card[];
};
