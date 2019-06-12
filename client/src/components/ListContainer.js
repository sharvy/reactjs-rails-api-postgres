import React, { Component } from 'react';
import axios from 'axios'

class ListContainer extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      lists: []
    }
  }

  componentDidMount() { 
    axios.get('http://localhost:3001/api/v1/lists.json')
      .then(response => { 
        console.log(response)
        this.setState({list: response.data})
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="List-container">
        Lists
      </div>
    );
  }
}

export default ListContainer;