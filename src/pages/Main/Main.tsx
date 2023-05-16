import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.search}>
        <form>
          <input type='search' placeholder='Search...' />
        </form>
      </div>
      <div className={styles.bookmarks}>Закладки</div>
    </div>
  );
};

export default Main;
