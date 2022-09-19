import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSound from "use-sound";

import { Task } from "../../models/Task";
import * as taskService from "../../services/TaskService";

import FoolistButton from "../Buttons/FoolistButton";
import popSFX from "../Buttons/pop.mp3";

import icons from "../../assets/img/icons";

import "./TaskItem.css";

interface Props {
  task: Task;
  loadTasks: () => void;
}

const TaskItem = ({ task, loadTasks }: Props) => {
  const [play] = useSound(popSFX);

  const navigate = useNavigate();

  const routeUpdateTask = () => {
    play();
    navigate(`/update/${task._id}`);
  };

  const handleDelete = async (id: string) => {
    play();
    await taskService.deleteTask(id);
    loadTasks();
    toast.success("Task is deleted");
  };

  return (
    <div className="task-item">
      <div className="container">
        <p className="text-center">{task.name}</p>
        <p className="text-center">{task.description}</p>
      </div>
      <div className="container btn-group">
        <FoolistButton onClick={routeUpdateTask}>
          <img src={icons[1].img} alt={icons[1].alt} width={20} />
        </FoolistButton>
        <FoolistButton onClick={() => task._id && handleDelete(task._id)}>
          <img src={icons[2].img} alt={icons[2].alt} width={20} />
        </FoolistButton>
      </div>
    </div>
  );
};

export default TaskItem;
