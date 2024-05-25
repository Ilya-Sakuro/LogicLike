import { useCardContext } from 'hooks/useCardContext';
import { useChooseСourses } from 'hooks/useChooseСourses';
import { useMemo } from 'react';
import styles from './sideBar.module.scss';

const SideBar = () => {
    const { cards, isFetched, error } = useCardContext();
    const { setTagCurses } = useChooseСourses();

    const filteredTags = useMemo(() => {
        const tagsSet: Set<string> = new Set();
        cards?.forEach(card => {
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

    return (
        <div className={styles.wrapper}>
            <button className={styles.btn} onClick={() => setTagCurses('')}>
                Все темы
            </button>
            {filteredTags.map((tag: string) => (
                <button key={tag} className={styles.btn} onClick={() => setTagCurses(tag)}>
                    {tag}
                </button>
            ))}
        </div>
    );
};

export default SideBar;
