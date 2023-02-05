import React from "react";
import "./NewGoal.module.css";
import GoalForm from "./GoalForm";
import Card from "../UIElements/Card";

const NewGoal = (props) => {
  return (
    <Card className="new-goal">
      <GoalForm handleSubmit = {props.handleSubmit} />
    </Card>
  );
};

export default NewGoal;
