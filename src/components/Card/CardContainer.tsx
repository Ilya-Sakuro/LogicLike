import { useCardQuery } from 'hooks/useCardQuery';
import Card from './Card';

const CardContainer = () => {
    const { cards } = useCardQuery();

    if (!cards) {
        return null;
    }
    return <Card cards={cards} />;
};

export default CardContainer;
