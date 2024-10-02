import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WorkoutProgressChart = () => {
  const workouts = useSelector((state) => state.workouts.workouts);

  // Aggregate workout data by date
  const data = workouts.reduce((acc, workout) => {
    const date = new Date(workout.date).toLocaleDateString();
    const existingEntry = acc.find((entry) => entry.date === date);

    if (existingEntry) {
      existingEntry.workoutCount += 1;
    } else {
      acc.push({ date, workoutCount: 1 });
    }

    return acc;
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Workout Progress Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="workoutCount" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WorkoutProgressChart;
