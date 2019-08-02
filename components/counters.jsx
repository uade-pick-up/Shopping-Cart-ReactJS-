import React, { Component } from "react";
import Counter from "./counter";

//composing components
class Counters extends Component {
  render() {
    console.log("Counters-Rendered");

    const { onReset, counters, onDelete, onIncrement } = this.props; //Argument destructuring (picking properties of the props we are interested in)
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    ); //wrapper for all counters is the div tag
  }
}

export default Counters;
