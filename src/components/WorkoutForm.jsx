import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWorkout } from '../features/workouts/workoutSlice';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { auth } from '../firebase'; // Make sure you have this imported to use current user

const WorkoutForm = () => {
  const [workout, setWorkout] = useState({
    type: '',
    duration: '',
    date: '',
    calories: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setWorkout({
      ...workout,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Dispatch to Redux store
    dispatch(addWorkout(workout));

    // Store workout data in Firebase
    await handleSubmitWorkout(workout);

    // Reset form
    setWorkout({ type: '', duration: '', date: '', calories: '' });
  };

  const handleSubmitWorkout = async (workoutData) => {
    try {
      const docRef = await addDoc(collection(db, 'workouts'), {
        ...workoutData,
        userId: auth.currentUser.uid, // store user-specific data
        timestamp: new Date(),
      });
      console.log('Workout saved with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding workout: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Workout Type</label>
        <input
          type="text"
          name="type"
          value={workout.type}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Duration (mins)</label>
        <input
          type="number"
          name="duration"
          value={workout.duration}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          name="date"
          value={workout.date}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Calories Burned</label>
        <input
          type="number"
          name="calories"
          value={workout.calories}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
        Log Workout
      </button>
    </form>
  );
};

export default WorkoutForm;
