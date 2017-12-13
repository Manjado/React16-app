import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/AuxMain';
import withClass from '../hoc/withClassOther';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor',props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps,nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate()',nextProps,nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  //  // return true;
  // }

  componentWillUpdate(nextProps,nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate',nextProps,nextState);
  }

   componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Alex', age: 27 },
      { id: '3', name: 'Nina', age: 25 }
    ],
    showPersons: false,
    toogleClicked: 0
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
    this.setState( ( prevState, props ) => {
      return {
        showPersons: !doesShow, 
        toogleClicked : prevState.toogleClicked + 1 
      }
    } );
  }

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if( this.state.showPersons ) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
        <Aux>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Person</button>
            <Cockpit 
              appTitle={this.props.title}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonHandler} />
            {persons}
        </Aux>
    );
  }
}

export default withClass(App, classes.App);
