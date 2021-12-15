import React from 'react';
export default class Random extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      randomStudent: {}
    }
    this.getRandomStudent = this.getRandomStudent.bind(this);
  }
  componentDidMount() {
    this.getRandomStudent();
  }

  getRandomStudent(){
    var ind = Math.floor(Math.random() * this.props.studentList.length);
    this.setState({ randomStudent: this.props.studentList[ind] })
  }

  render() {
    return (
      <div>
        <button onClick={this.getRandomStudent}>Randomize</button>
        <div>
          <img src={this.state.randomStudent.imageUrl}></img>
          <h1>{this.state.randomStudent.name}</h1>
        </div>
      </div>
    )
  }
}