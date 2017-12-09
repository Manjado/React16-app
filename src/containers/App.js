import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Alex', age: 27 },
      { id: '3', name: 'Nina', age: 25 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //nie mutuj stanu,wykonaj jego kopie czyli immutable
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    // this.setState({persons: persons})
    this.setState({persons});
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

   // const person = Object.assign({},this.state.persons[personIndex]);

   person.name = event.target.value;

   const persons = [...this.state.persons];
   persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;

    if( this.state.showPersons ) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler} />
          {persons}
        </div>
    );
  }
}

export default App;
