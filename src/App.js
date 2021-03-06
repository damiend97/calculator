import React, { Component } from 'react';

class App extends Component {
	handleClick = (e) => {
		const screen = document.getElementById("screen");
		const update = e.target.innerText;
		screen.value += update;
	}

	handleDelete = () => {
		const screen = document.getElementById("screen");
		screen.value = screen.value.slice(0, -1);
	}

	handleEval = () => {
		const screen = document.getElementById("screen");
		const eq = screen.value;
		const update = eval(eq);
		screen.value = update;

	}

	render() {
		return (
			<div className="container">
				<input type="text" id="screen" disabled />
				<div className="left-inputs">
					<div className="left-row">
						<div id="7" onClick={this.handleClick} className="button">7</div>
						<div id="8" onClick={this.handleClick} className="button">8</div>
						<div id="9" onClick={this.handleClick} className="button">9</div>
					</div>
					<div className="left-row">
						<div id="4" onClick={this.handleClick} className="button">4</div>
						<div id="5" onClick={this.handleClick} className="button">5</div>
						<div id="6" onClick={this.handleClick} className="button">6</div>
					</div>
					<div className="left-row">
						<div id="1" onClick={this.handleClick} className="button">1</div>
						<div id="2" onClick={this.handleClick} className="button">2</div>
						<div id="3" onClick={this.handleClick} className="button">3</div>
					</div>
					<div className="left-row">
						<div id="0" onClick={this.handleClick} className="button">0</div>
						<div id="decimal" onClick={this.handleClick} className="button">.</div>
						<div id="eval" onClick={this.handleEval} className="button">=</div>
					</div>
				</div>
				<div className="right-inputs">
					<div className="right-row">
						<div id="delete" onClick={this.handleDelete} className="button right">del</div>
					</div>
					<div className="right-row">
						<div id="divide" onClick={this.handleClick} className="button right">/</div>
					</div>
					<div className="right-row">
						<div id="multiply" onClick={this.handleClick} className="button right">*</div>
					</div>
					<div className="right-row">
						<div id="subtract" onClick={this.handleClick} className="button right">-</div>
					</div>
					<div className="right-row">
						<div id="add" onClick={this.handleClick} className="button right">+</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;