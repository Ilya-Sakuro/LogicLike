import { CardContext } from 'context/CardContext';
import { useContext } from 'react';
import { CardContextValue } from 'types/CardContext';

export const useCardQuery = (): CardContextValue => {
    const context = useContext(CardContext);
    if (context === null) {
        throw new Error('useCardContext must be used within a CardProvider');
    }
    return context;
};
