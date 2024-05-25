import { CardContext, CardContextValue } from 'context/CardContext';
import { useContext } from 'react';

export const useCardContext = (): CardContextValue => {
    const context = useContext(CardContext);
    if (context === null) {
        throw new Error('useCardContext must be used within a CardProvider');
    }
    return context;
};
