import { useCardQuery } from 'hooks/useCardQuery';
import { useMemo } from 'react';
import { CardType } from 'types/CardType';
import SideBar from './SideBar';

const SideBarContainer = () => {
    const { cards, isFetched, error } = useCardQuery();
    const filteredTags = useMemo(() => {
        const tagsSet: Set<string> = new Set();
        cards?.forEach((card: CardType) => {
            card.tags?.forEach(tag => tagsSet.add(tag));
        });
        return Array.from(tagsSet);
    }, [cards]);

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
    return <SideBar buttonsFromTags={filteredTags} />;
};

export default SideBarContainer;
