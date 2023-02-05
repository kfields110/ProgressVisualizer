import "./App.css";
import GoalsList from "./components/Goals/GoalsList";
import React, { useState } from "react";
import NewGoal from "./components/NewGoals/NewGoal";
import Layout from "./components/Layout";

function App() {
  const initialGoals = [
    {
      id: 1,
      name: "Code",
      days: 69,
      remind: false,
    },
    {
      id: 2,
      name: "Typing",
      days: 90,
      remind: false,
    },
  ];

  const [unfinishedGoals, setUnfinishedGoals] = useState(initialGoals);

  const [finishedGoals, setFinishedGoals] = useState([]);

  const completeGoal = (id) => {
    const newFinished = [...finishedGoals];
    newFinished.push(unfinishedGoals.filter((goal) => goal.id === id)[0]);
    setFinishedGoals(newFinished);
    setUnfinishedGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  function removeGoal(id) {
    const newUnfinished = [...unfinishedGoals];
    newUnfinished.push(finishedGoals.filter((goal) => goal.id === id)[0]);
    setUnfinishedGoals(newUnfinished);
    setFinishedGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  function addGoal(goal) {
    const newGoal = [...unfinishedGoals];
    newGoal.push(goal);
    setUnfinishedGoals(newGoal);
  }

  return (
   
      <Layout>
        <GoalsList
          items={unfinishedGoals}
          name="Unifinished Goals"
          handleClick={completeGoal}
        ></GoalsList>
        <GoalsList
          items={finishedGoals}
          name="Finished Goals"
          handleClick={removeGoal}
        ></GoalsList>
        <NewGoal handleSubmit={addGoal} />
      </Layout>
    
  );
}

export default App;
