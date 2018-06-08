import React from 'react';

function formatTime(t) {
  return t < 10 ? `0${t}` : t;
}

class Clock extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      time: 'Clock initialization...',
      animationClass: 'clock',
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const date = new Date();
    const m = date.getMinutes();
    const s = date.getSeconds();
    let h = date.getHours();
    let session = 'AM';

    if (h === 0) {
      h = 12;
    } else if (h > 12) {
      h -= 12;
      session = 'PM';
    }

    this.setState({
      time: `${formatTime(h)} : ${formatTime(m)} : ${formatTime(s)} ${session}`,
      animationClass: 'clock isAnimated',
    });

    setTimeout(() => {
      this.setState({
        animationClass: 'clock',
      });
    }, 400);
  }

  render() {
    return <div className={this.state.animationClass}>{this.state.time}</div>;
  }
}

export default Clock;
