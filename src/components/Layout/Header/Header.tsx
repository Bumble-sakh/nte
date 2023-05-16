import ROUTES from '@config/routes';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to={ROUTES.main}>Главная</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.weather}>Погода</NavLink>
          </li>
          <li>Помидор</li>
          <li>ToDo</li>
          <li>Google дела</li>
          <li>Дата/Время</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
