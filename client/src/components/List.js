import React from "react";

const List = ({ list, onRemoveList = f => f, onStartEditing = f => f }) => {
  return (
    <div className="card col-md-4" key={list.id}>
      <div className="card-body">
        <h5 className="card-title">{list.title}</h5>
        <p className="card-text">{list.excerpt}</p>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => onStartEditing(list.id)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => onRemoveList(list.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;
