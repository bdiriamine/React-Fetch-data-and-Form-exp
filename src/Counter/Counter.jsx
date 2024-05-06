import { Component, useState } from "react";
/*
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      date: undefined,
    };
  }
  componentDidMount() {
    // setInterval(() => {
    //   this.setState((previousState) => {
    //     return { counter: previousState + 1 };
    //   });
    // }, 1000);
  }
  handleIncremant = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };
  handlReset = () => {
    this.setState({ counter: 0 });
  };
  render() {
    return (
      <div>
        il ya {this.state.counter} seconds
        <button onClick={this.handleIncremant}> add </button>
        <button onClick={this.handlReset}> reset </button>
      </div>
    );
  }
}
*/
export default function Counter({initialValue, step}) {
  const [count, setCount] = useState(initialValue);
  return (
    <div>
      <div>
        {" "}
        <button
          onClick={() => {
            setCount((prevSate) => {
              return prevSate + step;
            });
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          {" "}
          reset{" "}
        </button>
      </div>
      my {count} is{" "}
    </div>
  );
}
