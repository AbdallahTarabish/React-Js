function Modal(props) {
  return (
    <div className="modal">
      <p>Are You Sure ? </p>
      <button className="btn btn-alt"> Ok</button>
      <button className="btn" onClick={props.onCancel}>
        {" "}
        Cancel
      </button>
    </div>
  );
}
export default Modal;
