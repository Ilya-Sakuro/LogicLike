import { useCardContext } from 'hooks/useCardContext';
import { useChooseСourses } from 'hooks/useChooseСourses';

import styles from './card.module.scss';

export type Card = {
    name: string;
    id: string;
    image: string;
    bgColor: string;
    tags?: Array<string>;
};

const Card = () => {
    const { cards, isFetched, error } = useCardContext();
    const { tagCurses } = useChooseСourses();

    const filteredCourses = () => {
        if (!tagCurses) return cards;
        return cards?.filter(course => course.tags?.includes(tagCurses));
    };

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

    return (
        <div className={styles.wrapper}>
            {filteredCourses()?.map((card: Card) => (
                <div
                    key={card.id}
                    style={{ backgroundColor: `${card.bgColor}` }}
                    className={styles.card}
                >
                    <img className={styles.img} src={card.image} alt='' />
                    <div className={styles.nameBox}>
                        <span className={styles.nameText}>{card.name}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
