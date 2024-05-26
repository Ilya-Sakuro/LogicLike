export type CardType = {
    name: string;
    id: string;
    image: string;
    bgColor: string;
    tags?: Array<string>;
};
export type CardPops = {
    cards: CardType[];
};
