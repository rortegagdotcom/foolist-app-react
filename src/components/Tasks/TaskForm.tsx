import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSound from 'use-sound';

import { Task } from '../../models/Task';
import * as taskService from '../../services/TaskService';

import FoolistButton from '../Buttons/FoolistButton';
import FoolistInput from '../Inputs/FoolistInput';
import FoolistTextArea from '../TextAreas/FoolistTextArea';

import icons from '../../assets/img/icons';
import popSFX from '../../assets/sounds/pop.mp3';

import './TaskForm.css';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const TaskForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [play] = useSound(popSFX);

  const initialState = {
    name: '',
    description: '',
  };

  const [task, setTask] = useState<Task>(initialState);
  const [cancelled, setCancelled] = useState(false);

  const handleInputChange = (e: InputChange) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!cancelled) {
      if (!params.id) {
        await taskService.createTask(task);
        toast.success('New task added');
        setTask(initialState);
      } else {
        await taskService.updateTask(params.id, task);
        toast.success('Update task succesfully');
        setTask(initialState);
      }
    }
    navigate('/');
  };

  const getTask = async (id: string) => {
    const res = await taskService.getTask(id);
    const { name, description } = res.data;
    setTask({ name, description });
  };

  useEffect(() => {
    if (params.id) getTask(params.id);
  }, [params.id]);

  return (
    <div>
      {params.id ? <h2>Update task</h2> : <h2>New task</h2>}
      <br />
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="fields">
          <label htmlFor="name">Name</label>
          <FoolistInput
            type="text"
            name="name"
            maxLength={20}
            placeholder=" "
            onChange={handleInputChange}
            value={task.name}
          />
          <br />
          <label htmlFor="description">Description</label>
          <FoolistTextArea
            name="description"
            cols={25}
            rows={5}
            maxLength={250}
            placeholder=" "
            onChange={handleInputChange}
            value={task.description}
          />
        </div>
        <div className="buttons">
          <FoolistButton onClick={() => play()}>
            <img src={icons[3].img} alt={icons[3].alt} width={20} />
          </FoolistButton>
          <FoolistButton
            onClick={() => {
              setCancelled(true);
              play();
            }}
          >
            <img src={icons[4].img} alt={icons[4].alt} width={20} />
          </FoolistButton>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
