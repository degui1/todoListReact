import styles from './ListItem.module.css';

import { Check, Trash } from 'phosphor-react';

export interface ITask {
  id: number;
  isChecked: boolean;
  content: string;
}

interface IListItemPros {
  task: ITask,
  onRemoveTask: (id: number) => void;
  onToggleTaskStatus: ({id, value}: {id: number, value: boolean}) => void;
}

export function ListItem({task, onRemoveTask, onToggleTaskStatus}: IListItemPros) {

  function handleToggleTaskStatus() {
    onToggleTaskStatus({ id: task.id, value: !task.isChecked })
  }

  function handleRemoveTask() {
    onRemoveTask(task.id);
  }

  const checkboxCheckedClassName = task.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked'];

  const paragraphCheckedClassName = task.isChecked
    ? styles['paragraph-checked']
    : '';

  return (
    <div className={styles.itemContainer}>
      <div>
        
        <label htmlFor="checkbox" onClick={handleToggleTaskStatus}>
          <input readOnly type="checkbox" checked={false} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassName}`}>
            {task.isChecked && <Check size={12} />}
          </span>
          <p className={`${styles.paragraph} ${paragraphCheckedClassName}`}>
            {task.content}
          </p>
        </label>

      </div>

      <button onClick={handleRemoveTask}>
        <Trash size={16} color='#808080'/>
      </button>
    </div>
  );
}