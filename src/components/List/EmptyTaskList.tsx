import Clipboards from '../../assets/Clipboard.svg';
import styles from './EmptyTaskList.module.css';

export function EmptyTaskList() {
  return (
    <div className={styles.emptyContainer}>
      <img src={Clipboards}/>

      <div className={styles.infoContainer}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}