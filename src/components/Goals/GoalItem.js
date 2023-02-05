import './Goal.css'
import Card from '../UIElements/Card'
//Simple card to display current Tracked Goals on main screen with number of days accomplishing goal

function GoalItem(props) {
  return (
    <Card className='goal-item'>
      <h2>{props.name}</h2>
      <div className="goal-item__days">#Days: {props.days}</div>
      <button onClick={() => {props.handleClick(props.id)}}>Complete Task</button>
    </Card>
  );
}

export default GoalItem;
