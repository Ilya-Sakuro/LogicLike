import { useQuery } from '@tanstack/react-query';
import { Card } from 'components/Card/Card';
import React from 'react';

export type CardContextValue = {
    cards: Card[] | undefined;
    isFetched: boolean;
    error: Error | null;
};

export const CardContext = React.createContext<CardContextValue | null>(null);

const CardProvider = ({ children }: { children: React.ReactNode }) => {
    const {
        data: cards,
        isFetched,
        error,
    } = useQuery({
        queryKey: ['cardData'],
        queryFn: () => fetch('https://logiclike.com/docs/courses.json').then(res => res.json()),
    });

    return (
        <CardContext.Provider value={{ cards, isFetched, error }}>{children}</CardContext.Provider>
    );
};

export default CardProvider;
