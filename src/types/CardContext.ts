import { Card } from './Card';

export type CardContextValue = {
    cards: Card[] | undefined;
    isFetched: boolean;
    error: Error | null;
};
