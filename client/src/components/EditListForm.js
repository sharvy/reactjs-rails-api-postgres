import React, { Component } from "react";
import PropTypes from "prop-types";

class EditListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.list.id,
      title: this.props.list.title,
      excerpt: this.props.list.excerpt
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id, title, excerpt } = this.state;
    this.props.editList(id, title, excerpt);
  };

  render() {
    return (
      <form className="card col-md-4" onSubmit={this.handleSubmit}>
        <fieldset>
          <input
            className="form-control"
            name="title"
            type="text"
            placeholder="Title..."
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            className="form-control"
            name="excerpt"
            type="text"
            placeholder="Excerpt..."
            value={this.state.excerpt}
            onChange={this.handleChange}
          />
          <button type="submit" class="btn btn-primary mb-2">
            Update List
          </button>
        </fieldset>
      </form>
    );
  }
}

EditListForm.propTypes = {
  list: PropTypes.object.isRequired,
  editList: PropTypes.func.isRequired
};

export default EditListForm;
