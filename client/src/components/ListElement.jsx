import axios from 'axios';
import React from 'react';

class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      editToggled: false
    }
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeToggleHandler = this.changeToggleHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeNameHandler(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    })
  }

  changeToggleHandler() {
    this.setState({
      editToggled: !this.state.editToggled
    })
  }

  handleSubmit() {
    axios.patch(`/api/students/${this.props.student._id}`, {
      name: this.state.name
    })
      .then(() => this.props.getStudents())
      .then(() => this.changeToggleHandler())
      .then(() => this.setState({ name: '' }))
      .catch(err => console.error(err))
  }

  render() {
    if (!this.state.editToggled) {
      return (
        <span>
          <div onClick={this.changeToggleHandler}>{this.props.student.name}</div>
          <img src={this.props.student.imageUrl}></img>
        </span>
      )
    } else {
      return (
        <div>
          <div>{this.props.student.name}</div>
          <input
            type="text"
            value={this.state.name}
            placeholder={this.props.student.name}
            onChange={this.changeNameHandler}
          ></input>
          <div>
            <button onClick={this.changeToggleHandler}>Cancel</button>
            <button onClick={this.handleSubmit}>Update</button>
          </div>
          <img src={this.props.student.imageUrl}></img>
        </div>
      )
    }
  }
}
export default ListElement;