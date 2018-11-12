import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log("Event of Dlete is Pressed!", counterId);
    const counters = this.state.counters.filter(d => d.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        {/* <h2 className="">{this.counters.value}</h2> */}
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
