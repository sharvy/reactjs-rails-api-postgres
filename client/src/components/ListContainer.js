import React, { Component } from "react";
import axios from "axios";
import List from "./List";
import NewListForm from "./NewListForm";
import EditListForm from "./EditListForm";

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      editingListId: null
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/v1/lists.json")
      .then(response => {
        console.log(response);
        this.setState({ lists: response.data });
      })
      .catch(error => console.log(error));
  }

  addNewList = (title, excerpt) => {
    axios
      .post("/api/v1/lists", { list: { title, excerpt } })
      .then(response => {
        console.log(response);
        const lists = [...this.state.lists, response.data];
        this.setState({ lists });
      })
      .catch(error => console.log(error));
  };

  removeList = id => {
    axios
      .delete(`/api/v1/lists/${id}`)
      .then(response => {
        const lists = this.state.lists.filter(list => list.id !== id);
        this.setState({ lists });
      })
      .catch(error => console.log(error));
  };

  editList = (id, title, excerpt) => {
    axios
      .put(`/api/v1/lists/${id}`, { list: { title, excerpt } })
      .then(response => {
        console.log(response);
        let lists = this.state.lists;
        lists = lists.map(list => (list.id === id ? response.data : list));
        this.setState({ lists, editingListId: null });
      })
      .catch(error => console.log(error));
  };

  startEditing = id => {
    this.setState({ editingListId: id });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.lists.map(list => {
            if (this.state.editingListId === list.id) {
              return (
                <EditListForm
                  list={list}
                  key={list.id}
                  editList={this.editList}
                />
              );
            } else {
              return (
                <List
                  list={list}
                  key={list.id}
                  onRemoveList={this.removeList}
                  onStartEditing={this.startEditing}
                />
              );
            }
          })}
          <NewListForm onNewList={this.addNewList} />
        </div>
      </div>
    );
  }
}

export default ListContainer;
