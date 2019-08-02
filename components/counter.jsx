import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {                        //binding method, used when not using arrow function
  //     super();
  //     this.handleIcrement = this.handleIcrement.bind(this);
  //   }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter-Unmount");
  }

  render() {
    console.log("Counter-Rendered");

    // console.log(this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} //event handling
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)} //calling the on delete function to work from the counters file
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    //setting up customization
    let classes = "badge m-2 badge-"; //bootstrap use
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //printing on the web page
    const { value: count } = this.props.counter; //count would hold the count value from the state object
    return count === 0 ? <h6>Zero</h6> : count;
  }
}
export default Counter;
