import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { CardContextValue } from 'types/CardContext';

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

    if (!isFetched) {
        return (
            <CardContext.Provider value={{ cards, isFetched, error }}>
                <h1> Loading...</h1>
            </CardContext.Provider>
        );
    }

    if (error) {
        console.error(error.message);

        return (
            <CardContext.Provider value={{ cards, isFetched, error }}>
                <h1>An error has occurred: {error.message}</h1>
            </CardContext.Provider>
        );
    }

    return (
        <CardContext.Provider value={{ cards, isFetched, error }}>{children}</CardContext.Provider>
    );
};

export default CardProvider;
