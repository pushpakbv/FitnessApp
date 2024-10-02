import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeWorkout } from '../features/workouts/workoutSlice';


const WorkoutHistory = () => {
  const workouts = useSelector((state) => state.workouts.workouts);
  const dispatch = useDispatch();

  const handleRemove = (index) => {
    dispatch(removeWorkout(index));
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Workout History</h2>
      {workouts.length === 0 ? (
        <p>No workouts logged yet.</p>
      ) : (
        <ul>
          {workouts.map((workout, index) => (
            <li key={index} className="mb-2 p-2 bg-gray-100 rounded-md">
              <p>Type: {workout.type}</p>
              <p>Duration: {workout.duration} mins</p>
              <p>Date: {workout.date}</p>
              <p>Calories Burned: {workout.calories}</p>
              <button
                onClick={() => handleRemove(index)}
                className="mt-2 bg-red-500 text-white p-1 rounded-md hover:bg-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutHistory;
