import classes from "./Checkbox.module.css";

const Checkbox = (props) => {
  return (
    <li className={classes.list}>
      <input
        className={classes.input}
        type="checkbox"
        onClick={props.onClickHandler}
        checked={props.isChecked}
        value={props.value}
        id={props.id}
      />
      <label>{props.value}</label>
    </li>
  );
};

export default Checkbox;
