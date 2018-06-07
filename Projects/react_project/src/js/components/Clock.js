import React from 'react';

class Clock extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      time: 'Clock initialization...',
    };
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.renderTime();
  }

  renderTime() {
    const date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = 'AM';

    if (h === 0) {
      h = 12;
    } else if (h > 12) {
      h -= 12;
      session = 'PM';
    }

    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    this.setState({
      time: `${h} : ${m} : ${s} ${session}`,
    });
  }

  render() {
    return <div className="clock">{this.state.time}</div>;
  }
}

export default Clock;
