import { useChooseСourses } from 'hooks/useChooseСourses';
import { FC } from 'react';
import { Card, CardPops } from 'types/Card';
import styles from './card.module.scss';

const Card: FC<CardPops> = ({ cards }) => {
    const { tagCurses } = useChooseСourses();

    const filterСourses = () => {
        if (!tagCurses) return cards;
        return cards?.filter((course: Card) => course.tags?.includes(tagCurses));
    };

    return (
        <div className={styles.wrapper}>
            {filterСourses()?.map((card: Card) => (
                <div
                    key={card.id}
                    style={{
                        backgroundColor: `${card.bgColor}`,
                    }}
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
