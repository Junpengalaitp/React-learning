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

  swithNameHandler = (newName) => {
    console.log('Was clicked!');
    this.setState({persons: [
      {name: newName, age: 27},
      {name: 'Junpeng Only', age: 27},
      {name: 'Junpeng Only', age: 27}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState( {persons:
      [
        {name: 'Only Junpeng', age: 27},
        {name: event.target.value, age: 21},
        {name: 'Ace', age: 33}
      ]
    } )
  }
  

  render() {
    return (
        <div className="App">
          <h1>Hi, I'm a react app</h1>
          <p>This is really working</p>
          <button onClick={this.swithNameHandler.bind(this, 'Junpeng')}>Switch Name</button>
          <Person name={this.state.persons[0].name}
                   age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name}
                   age={this.state.persons[1].age}
                   click={this.swithNameHandler.bind(this, 'Junpeng Again')}
                   changed={this.nameChangedHandler}>My hobbies: racing</Person>
          <Person name={this.state.persons[2].name}
                   age={this.state.persons[2].age}/>
        </div>
    );
    //   return React.createElement('div', {className: 'App'},
    //       React.createElement('h1', null, 'Does it work now?'), "Hi, I'm a react app!!!")
  }
}

export default App;
