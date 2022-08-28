const Item = ({ id, note, deleteData, submittingStatus }) => {

  function deleteItem() {
    submittingStatus.current = true
    deleteData(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className="item">
      <p>{note}</p>
      <button onClick={deleteItem} className="remove">刪除</button>
    </div>
  );
};

export default Item;
