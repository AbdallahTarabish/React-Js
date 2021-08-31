import { useState } from "react";
import BackDrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [isOpen, modalState] = useState(false);
  function deleteHandler() {
    modalState(true);
  }

  function closeHandler() {
    modalState(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isOpen ? (
        <Modal onCancel={closeHandler} onCnfirm={closeHandler} />
      ) : null}
      {isOpen ? <BackDrop onCancel={closeHandler} /> : null}
    </div>
  );
}

export default Todo;
