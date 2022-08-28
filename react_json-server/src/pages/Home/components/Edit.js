import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {
  const [note, setNote] = useState("");

  function addItem() {
    submittingStatus.current = true
    add(prevData => ([{ id: v4(), note, }, ...prevData]));
  }

  return (
    <div>
      <input type="text" value={note} onChange={(e) => {
        setNote(e.target.value)
      }} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
