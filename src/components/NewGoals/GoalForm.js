import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {v4 as uuidv4} from 'uuid'

function GoalForm(props) {
  const [show, setShow] = useState(false);
  const [goal, setGoal] = useState();
  const [reminder, setReminder] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCheck = () => {
    setReminder(!reminder);
  };

  const clickHandler = (event) => {
    handleClose();
    props.handleSubmit(goal);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a new Goal!
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Goal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="new-goal__controls">
              <div className="new-goal__control">
                <label>Title</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setGoal({
                      id: uuidv4(),
                      name: e.target.value,
                      days: 0,
                      remind: reminder,
                    })
                  }
                />
              </div>
              <div className="new-goal__control">
                <label>Send Reminder?</label>
                <input
                  type="checkbox"
                  remind={reminder}
                  onChange={handleCheck}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={clickHandler}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GoalForm;



