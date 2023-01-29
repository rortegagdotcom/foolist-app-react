import axios from 'axios';

import { Task } from '../models/Task';

const API = 'http://localhost:4000';

export const getTasks = async () => {
  return await axios.get<Task[]>(`${API}/tasks`);
};

export const getTask = async (id: string) => {
  return await axios.get<Task>(`${API}/tasks/${id}`);
};

export const createTask = async (task: Task) => {
  return await axios.post(`${API}/tasks`, task);
};

export const updateTask = async (id: string, task: Task) => {
  return await axios.put<Task>(`${API}/tasks/${id}`, task);
};

export const deleteTask = async (id: string) => {
  return await axios.delete(`${API}/tasks/${id}`);
};
