import React from "react";

const Input = () => {
  return (
    <div className="inputbox">
      <form>
        <label>Add Item</label>
        <input type="text" className="input" />
        <button className="button" >Add</button>
      </form>
    </div>
  );
};

export default Input;
