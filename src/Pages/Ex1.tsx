import '../css/main.css'
import '../css/Ex1.css'
import React, { Key } from 'react';

function getTodoList() {
  const todoList = JSON.parse(localStorage.getItem('todoList') || 'null') || { incomplete: [], done: [] };
  return todoList;
}

function saveTodoList(todoList: any) {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

export default function TodoList() {
  const initialTodoList = getTodoList();

  const [todoList, setTodoList] = React.useState(initialTodoList);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskInput = (e.target as HTMLFormElement).querySelector('.task-input') as HTMLInputElement;
    const newTaskText = taskInput.value.trim();
    if (newTaskText !== '') {
      const updatedTodoList = { ...todoList };
      updatedTodoList.incomplete.push({ text: newTaskText });
      setTodoList(updatedTodoList);
      saveTodoList(updatedTodoList);
      taskInput.value = '';
    }
  };
  
  function handleTaskToggle(updatedTask: { done: any; text?: any; }, index: React.Key | null | undefined) {
    const updatedTodoList = { ...todoList };
    const isTaskIncomplete = updatedTask.done === false;

    if (isTaskIncomplete) {
      updatedTodoList.incomplete.splice(index, 1);
    } else {
      updatedTodoList.done.splice(index, 1);
    }
    updatedTask.done = !updatedTask.done;
    if (updatedTask.done) {
      updatedTodoList.done.push(updatedTask);
    } else {
      updatedTodoList.incomplete.push(updatedTask);
    }
    
    console.log(updatedTodoList);
  
    setTodoList(updatedTodoList);
    saveTodoList(updatedTodoList);
  }

  function clearTodoList() {
    setTodoList({ incomplete: [], done: [] });
    localStorage.removeItem('todoList');
  }
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear the todo list?")) {
      clearTodoList();
    }
  };
  return (
    <div className="todo-list">
      <div className="todo-header">
        <h1>TODO</h1>
        <div className='date'>
          <h3>Today</h3>
          <p>23 Oct 2023</p>
        </div>
      </div>
      <hr className='seperator'/>
      <div className='todo-body'>
        <div className='todo-input'>
          <form onSubmit={handleFormSubmit}>
            <input type="text" className='task-input' placeholder='Add new task' />
            <button type='submit'className='task-submit'>+</button>
          </form>
          <div className="todo-clear">
            <button onClick={handleClearAll}>Clear All</button>
          </div>
        </div>
        <div className='todo-incomplet'>
          <ul>
            {todoList.incomplete.map((
              task: {
               text: any;
               done?: boolean | undefined;
              },
              index: React.Key | null | undefined
              ) => (
              <li key={index} className='todo-task' onClick={() => handleTaskToggle({ ...task, done: false }, index)}>
                <input type="checkbox" className='todo-check' />
                <p className='todo-task-text'>{task.text}</p>
              </li>
            ))}
            {todoList.done.map((
              task: {
                text: any;
                done: boolean | undefined;
                },
                index: React.Key | null | undefined
                ) => (
              <li key={index} className='todo-task done' onClick={() => handleTaskToggle({ ...task, done: true }, index)}>
                <input type="checkbox" className='todo-check' checked onChange={() => handleTaskToggle(task, index)}/>
                <p className='todo-task-text'>{task.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}