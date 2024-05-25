import styles from './main.module.scss';

const MainPage = ({ children }: { children: React.ReactNode }) => {
    return <main className={styles.main}>{children}</main>;
};

export default MainPage;
