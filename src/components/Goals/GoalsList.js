import Card from "../UIElements/Card";
import GoalItem from "./GoalItem";
import './GoalList.css'

function GoalsList(props) {
  return (
    <Card className="goals">
        <h1>{props.name}</h1>
        {props.items.map(goal => <GoalItem key={goal.id} name = {goal.name} days = {goal.days} id={goal.id} handleClick={props.handleClick}/>)}
    </Card>
  );
}

export default GoalsList;
