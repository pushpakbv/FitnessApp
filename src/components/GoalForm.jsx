import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGoal } from '../features/goals/goalSlice';

const GoalForm = () => {
  const [goal, setGoal] = useState({
    description: '',
    target: '',
    deadline: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setGoal({
      ...goal,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addGoal(goal));
    setGoal({ description: '', target: '', deadline: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Goal Description</label>
        <input
          type="text"
          name="description"
          value={goal.description}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Target (e.g., distance, calories)</label>
        <input
          type="text"
          name="target"
          value={goal.target}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Deadline</label>
        <input
          type="date"
          name="deadline"
          value={goal.deadline}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-700">
        Add Goal
      </button>
    </form>
  );
};

export default GoalForm;
