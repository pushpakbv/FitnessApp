import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeGoal } from '../features/goals/goalSlice';

const GoalList = () => {
  const goals = useSelector((state) => state.goals.goals);
  const dispatch = useDispatch();

  const handleRemove = (index) => {
    dispatch(removeGoal(index));
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Fitness Goals</h2>
      {goals.length === 0 ? (
        <p>No goals set yet.</p>
      ) : (
        <ul>
          {goals.map((goal, index) => (
            <li key={index} className="mb-2 p-2 bg-gray-100 rounded-md">
              <p>Description: {goal.description}</p>
              <p>Target: {goal.target}</p>
              <p>Deadline: {goal.deadline}</p>
              <button
                onClick={() => handleRemove(index)}
                className="mt-2 bg-red-500 text-white p-1 rounded-md hover:bg-red-700"
              >
                Remove Goal
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoalList;
