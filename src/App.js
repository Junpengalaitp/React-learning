import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 22},
      {name: 'Jack', age: 12},
      {name: 'Ace', age: 33}
    ],
    otherState: 'some other value'
  }

  swithNameHandler = (params) => {
    console.log('Was clicked!');
    this.setState({persons: [
      {name: 'Junpeng Only', age: 27},
      {name: 'Junpeng Only', age: 27},
      {name: 'Junpeng Only', age: 27}
    ]})
  }
  

  render() {
    return (
        <div className="App">
          <h1>Hi, I'm a react app</h1>
          <p>This is really working</p>
          <button onClick={this.swithNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
    );
    //   return React.createElement('div', {className: 'App'},
    //       React.createElement('h1', null, 'Does it work now?'), "Hi, I'm a react app!!!")
  }
}

export default App;
