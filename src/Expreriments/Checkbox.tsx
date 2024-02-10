import React from "react";
import "./style.css";

type CheckboxProps = {
  id: string;
  checked: boolean;
  checkedFunc: any;
  todo: Todolist;
};

function TestCheckbox({ id, checked, checkedFunc, todo }: CheckboxProps) {
  return (
    <React.Fragment>
      <div className="checkbox-wrapper-24">
        <input
          type="checkbox"
          id={id}
          name={id}
          checked={checked}
          onChange={() => checkedFunc(todo.id, todo.status)}
        />
        <label htmlFor={id}>
          <span></span>
        </label>
      </div>
    </React.Fragment>
  );
}

export default TestCheckbox;
