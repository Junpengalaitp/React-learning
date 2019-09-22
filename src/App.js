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
    otherState: 'some other value',
    showPersons: false
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

  togglePersonHandler = (params) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  render() {
    const style = {
      backgroundColor: '#8888C6',
      font: 'inherit',
      border: '5x solid red',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>  
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />
          })}
        </div>
      ) 
    }

    return (
        <div className="App">
          <h1>Hi, I'm a react app</h1>
          <p>This is really working</p>
          <button 
            style={style}
            onClick={this.togglePersonHandler}>Switch Name</button>
            {this.state.showPersons ? persons : null}
        </div>
    );
    //   return React.createElement('div', {className: 'App'},
    //       React.createElement('h1', null, 'Does it work now?'), "Hi, I'm a react app!!!")
  }
}

export default App;
