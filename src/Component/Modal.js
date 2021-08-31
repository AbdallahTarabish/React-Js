function Modal(props) {
  function onCancel() {
    props.onCancel();
  }

  function onConfrim() {
    props.onCnfirm();
  }

  return (
    <div className="modal">
      <p>Are You Sure ? </p>
      <button className="btn btn-alt" onClick={onConfrim}>
        {" "}
        Ok
      </button>
      <button className="btn" onClick={onCancel}>
        {" "}
        Cancel
      </button>
    </div>
  );
}
export default Modal;
