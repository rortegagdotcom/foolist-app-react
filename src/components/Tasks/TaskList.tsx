import React, { useEffect, useState } from 'react';

import { Task } from '../../models/Task';
import * as taskService from '../../services/TaskService';

import TaskItem from './TaskItem';

import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const res = await taskService.getTasks();

    const formatedTasks = res.data
      .map((task) => {
        return {
          ...task,
          createdAt: task.createdAt ? new Date(task.createdAt) : new Date(),
          updatedAt: task.updatedAt ? new Date(task.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setTasks(formatedTasks);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="task-list">
      {tasks.map((task: Task) => {
        return <TaskItem key={task._id} task={task} loadTasks={loadTasks} />;
      })}
    </div>
  );
};

export default TaskList;
