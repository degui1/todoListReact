import { PlusCircle } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

import styles from './CreateTaskButton.module.css';

interface ICreateTaskButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CreateTaskButton({ ...props }: ICreateTaskButton) {
  return(
    <button className={styles.container} {...props} >
      Criar
      <PlusCircle size={16} color="#f2f2f2" weight="bold"/>
    </button>
  )
}