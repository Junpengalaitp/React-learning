import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Max', age: 22},
      {id: '2', name: 'Jack', age: 12},
      {id: '3', name: 'Ace', age: 33}
    ],
    otherState: 'some other value',
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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
          {this.state.persons.map((person, index) => {
            return <Person 
                    name={person.name}
                    age={person.age}
                    click={this.deletePersonHandler.bind(this, index)}
                    key={person.name} />
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
