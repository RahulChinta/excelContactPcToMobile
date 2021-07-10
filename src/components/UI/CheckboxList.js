import Checkbox from "./Checkbox";
import Button from "./Button";
import classes from "./CheckboxList.module.css";

const CheckboxList = (props) => {
  const onCheckboxClickHandler = (event) => {
    const { checked, value } = event.target;
    const checkboxColumn = props.checkboxList.find(
      (item) => item.name === value
    );
    if (checkboxColumn) {
      checkboxColumn.isChecked = checked;
    }
  };

  const onAddContactHandler = (event) => {
    const { checked, id } = event.target;
    const checkboxColumn = props.checkboxList.find(
      (item) => `checkbox_${item.id}` === id
    );
    if (checkboxColumn) {
      checkboxColumn.isMobileNumber = checked;
    }
  };

  const checkboxListData = props.checkboxList.map((item, index) => (
    <div key={index} className={classes.container}>
      <Checkbox
        key={item.id}
        id={item.id}
        value={item.name}
        onClickHandler={onCheckboxClickHandler}
      />
      <Checkbox
        key={`checkbox_${item.id}`}
        id={`checkbox_${item.id}`}
        value="Add as Contact"
        onClickHandler={onAddContactHandler}
      />
    </div>
  ));

  const onColumnListSubmit = () => {
    const filteredColumnList = props.checkboxList.filter(
      (item) => item.isChecked
    );
    props.submitList(filteredColumnList);
  };

  return (
    <div>
      <div>
        <h1>Choose column to display</h1>
      </div>
      <div>
        <ul>{checkboxListData}</ul>
        <Button
          onButtonClick={onColumnListSubmit}
          type="button"
          value="Start Now"
        />
      </div>
    </div>
  );
};

export default CheckboxList;
