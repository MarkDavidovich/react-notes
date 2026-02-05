import style from "./Modal.module.css";

const Modal = ({ onClose, id, dateCreated, title, text }) => {
  return (
    <div className={style.backdrop} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <span className={style.header}>
          <p className={style.date}> {dateCreated}</p>
          <button className={style.btn} onClick={onClose}>
            ✖
          </button>
        </span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default Modal;
