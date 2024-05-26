import { CardType } from './CardType';

export type CardContextValue = {
    cards: CardType[] | undefined;
    isFetched: boolean;
    error: Error | null;
};
