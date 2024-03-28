import { ChangeEvent, useState } from 'react';

import { CreateTaskButton } from './components/CreateTaskButton';
import { Header } from './components/Header';
import { InputTask } from './components/InputTask';
import { ListHeader } from './components/List/ListHeader';
import { EmptyTaskList } from './components/List/EmptyTaskList';
import { ITask, ListItem } from './components/List/ListItem';

import styles from './App.module.css';
import './global.css';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState('');

  const checkedTaskCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) prevValue + 1

    return prevValue;
  }, 0)

  function handleInputTask(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function createTask() {
    if (!inputValue) return;

    const newTask: ITask = {
      id: new Date().getTime(),
      content: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask]);
    setInputValue('');
  }

  function removeTask(id: number) {
    const filteredTasks = tasks.filter((tasks) => tasks.id !== id);

    if(!confirm('Deseja mesmo apafar essa tarefa?')) return;

    setTasks(filteredTasks);
  }

  function toggleTaskStatus({id, value}: { id: number; value: boolean }) {
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return {...task};
    })

    setTasks(updateTasks);
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.addTaskContainer}>
          <InputTask
            onChange={handleInputTask}
            value={inputValue}  
          />
          <CreateTaskButton onClick={createTask} />
        </div>

        <div className={styles.taskListContainer}>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTaskCounter}
          />

          {
            tasks.length === 0
            ? <EmptyTaskList />
            : <div>
                {tasks.map((task) => {
                  return (
                    <ListItem
                      task={task}
                      onRemoveTask={removeTask}
                      onToggleTaskStatus={toggleTaskStatus}
                    />
                  );
                })}
              </div>
          }
        </div>
      </section>
    </main>
  )
}

export default App
