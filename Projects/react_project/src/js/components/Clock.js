import React from 'react';

class Clock extends React.Component {
  constructor(...args) {
    super(args);

    this.state = {
      date: new Date(),
    };
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return <div className="clock">{this.state.date.toLocaleTimeString()}</div>;
  }
}

export default Clock;
