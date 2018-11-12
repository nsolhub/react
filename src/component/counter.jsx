import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
    app: 0,
    imageURL: "https://picsum.photos/200",
    tags: []
  };

  style = {
    fontWeight: 700,
    fontSize: 28
  };

  renderTags() {
    if (this.state.tags.length === 0)
      return <h3> There are not tags found!</h3>;

    return (
      <ul>
        {this.state.tags.map(tags => (
          <li key={tags}>{tags}</li>
        ))}
      </ul>
    );
  }
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
    console.log("value updated to : ", { value: this.state.value });
    // alert("value is updated to :: " + { count: this.state.count });
  };
  handle2 = prod => {
    //console.log("check ", prod);
    this.setState({ value: this.state.value + 1 });
  };
  doHandle2 = () => {
    this.handle2({ id: 1 });
  };

  doHandleDec = () => {
    this.state.value <= 0 || this.setState({ value: this.state.value - 1 });
  };
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    return (
      <React.Fragment>
        <h2 style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </h2>
        {this.state.value >= 5 || (
          <button
            id="okay"
            onClick={() => this.doHandle2({ id: 1 })}
            style={{ fontSize: 25 }}
            className="btn btn-info"
          >
            Increment
          </button>
        )}
        {this.state.value >= 1 && (
          <button
            id="decrement"
            onClick={this.doHandleDec}
            style={{ fontSize: 20 }}
            className="btn btn-warning"
          >
            decrement
          </button>
        )}
        {this.state.value <= 0 && (
          <button
            id="delete"
            onClick={() => this.props.onDelete(this.props.id)}
            className="btn btn-danger"
          >
            Deletee
          </button>
        )}

        <br />
        {/* <ul>
          {this.state.tags.map(tags => (
            <li key={tags}>{tags}</li>
          ))}
        </ul>
        <h1>new conditional operators goes here</h1>
        {this.state.tags.length === 0 && <h3>please enter a new tag</h3>}
        <ul>{this.renderTags()}</ul> */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  // render() {
  //   return (
  //     <React.Fragment>
  //       <span className="badge badge-primary">Zero</span>
  //       <h1 className="jumbotron">
  //         Hello Pakistan {this.formatCount()} and {this.state.app}
  //       </h1>
  //       <h2>buhaha</h2>
  //       <button>Increament</button>
  //     </React.Fragment>
  //   );
  // }

  formatCount() {
    const { value } = this.state;
    return this.state.app === value ? "zero" : value;
  }
}

export default Counter;
