import BackDrop from "./Component/Backdrop";
import Modal from "./Component/Modal";
import Todo from "./Component/Todo";
function Test() {
  return (
    <div>
      <h1>Abdalla's TO DO'S</h1>
      <Todo text="Laravel" />
      <Todo text="API" />
      <Todo text="PHP" />
      <Modal />
      <BackDrop />
    </div>
  );
}

export default Test;
