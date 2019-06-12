import React from "react";

const NewListForm = ({ onNewList = f => f }) => {
  let title, excerpt;
  const submit = e => {
    e.preventDefault();
    onNewList(title.value, excerpt.value);
    title.value = "";
    excerpt.value = "";
    title.focus();
  };

  return (
    <form className="card col-md-4" onSubmit={submit}>
      <input
        className="form-control"
        ref={input => (title = input)}
        type="text"
        placeholder="Title..."
        required
      />
      <input
        className="form-control"
        ref={input => (excerpt = input)}
        type="text"
        placeholder="Excerpt..."
        required
      />
      <button type="submit" className="btn btn-primary">
        Add List
      </button>
    </form>
  );
};

export default NewListForm;
