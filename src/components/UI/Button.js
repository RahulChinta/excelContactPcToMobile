import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onButtonClick}
      className={classes.buttons}
    >
      {props.value}
    </button>
  );
};

export default Button;
