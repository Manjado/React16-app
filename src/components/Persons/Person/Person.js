// import React from 'react';
// import classes from './Person.css';


// const person = (props) => {
// 	return (
// 		<div className={classes.Person} >
// 			<p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
// 			<p>{props.children}</p>
// 			<input onChange={props.changed} value={props.name}/>
// 		</div>
// 	)
// }

// export default person;

//from stateless to stateful

import React, { Component } from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/withClassOther';
import Aux from '../../../hoc/AuxMain';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor',props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
  }

	render() {
		console.log('[Person.js] Inside render()');

		return (
			<Aux>
				<p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
				<p>{this.props.children}</p>
				<input onChange={this.props.changed} value={this.props.name}/>
			</Aux>
		)
	}
}

export default withClass(Person,classes.Person);