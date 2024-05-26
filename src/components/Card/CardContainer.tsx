import { useCardQuery } from 'hooks/useCardQuery';
import Card from './Card';

const CardContainer = () => {
    const { cards, isFetched, error } = useCardQuery();
    if (!isFetched) {
        return <h1> Loading...</h1>;
    }

    if (error) {
        console.error(error.message);
        return <h1>An error has occurred:{error.message}</h1>;
    }
    if (!cards) {
        return null;
    }
    return <Card cards={cards} />;
};

export default CardContainer;
