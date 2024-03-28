import { InputHTMLAttributes } from 'react';
import styles from './InputTask.module.css';

interface IInputTask extends InputHTMLAttributes<HTMLInputElement> {}

export function InputTask({ ...props }: IInputTask) {
  return (
    <input
      className={styles.inputTask}
      type="text"
      placeholder='Adicione uma nova tarefa'
      {...props}
    />
  );
}