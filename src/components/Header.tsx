import styles from './Header.module.css';
import todoListLogo from '../assets/LogoToDoList.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoListLogo} alt='Logotipo do site' />
    </header>
  );
}