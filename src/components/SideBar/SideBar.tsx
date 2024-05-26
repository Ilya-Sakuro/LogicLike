import { generateUniqueId } from 'helpers/generateUniqueId';
import { useChooseСourses } from 'hooks/useChooseСourses';
import { FC } from 'react';
import { SideBarPops } from 'types/SideBar';
import styles from './sideBar.module.scss';

const SideBar: FC<SideBarPops> = ({ buttonsFromTags }) => {
    const { setTagCurses } = useChooseСourses();

    return (
        <div className={styles.wrapper}>
            <button className={styles.btn} onClick={() => setTagCurses('')}>
                Все темы
            </button>
            {buttonsFromTags.map(tag => (
                <button
                    key={generateUniqueId()}
                    className={styles.btn}
                    onClick={() => setTagCurses(tag)}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
};

export default SideBar;
