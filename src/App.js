import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person";

const App = props => {
    const [ personsState, setPersonState ] = useState({
      persons: [
        {name: 'Max', age: 22},
        {name: 'Jack', age: 12},
        {name: 'Ace', age: 33}
      ],
      otherState: 'some other value'
    });
    
    const swithNameHandler = (params) => {
      console.log('Was clicked!');
      setPersonState({persons: [
        {name: 'Junpeng Only', age: 27},
        {name: 'Junpeng Only', age: 27},
        {name: 'Junpeng Only', age: 27}
      ],
      otherState: personsState.otherState
    })
    }

    return (
        <div className="App">
          <h1>Hi, I'm a react app</h1>
          <p>This is really working</p>
          <button onClick={swithNameHandler}>Switch Name</button>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: racing</Person>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    );
    //   return React.createElement('div', {className: 'App'},
    //       React.createElement('h1', null, 'Does it work now?'), "Hi, I'm a react app!!!")
}

export default App;

// state = {
//   persons: [
//     {name: 'Max', age: 22},
//     {name: 'Jack', age: 12},
//     {name: 'Ace', age: 33}
//   ],
//   otherState: 'some other value'
// }

// swithNameHandler = (params) => {
//   console.log('Was clicked!');
//   this.setState({persons: [
//     {name: 'Junpeng Only', age: 27},
//     {name: 'Junpeng Only', age: 27},
//     {name: 'Junpeng Only', age: 27}
//   ]})
// }
