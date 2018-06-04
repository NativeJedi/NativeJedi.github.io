import React from 'react';

class Time {
  constructor() {
    this.session = "AM";
  }

  getHours() {
    var date = new Date();
    var h = date.getHours();

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      this.session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    return h;
  }

  getMinutes() {
    var date = new Date();
    var m = date.getMinutes();

    m = (m < 10) ? "0" + m : m;

    return m;
  }

  getSeconds() {
    var date = new Date();
    var s = date.getSeconds();

    s = (s < 10) ? "0" + s : s;

    return s;
  }

  getSession() {
    return this.session;
  }
}

let time = new Time();

function Clock() {
  return (
    <div className="clock">
      <span className="hours">{time.getHours()} :</span>
      <span className="minutes"> {time.getMinutes()} :</span>
      <span className="seconds"> {time.getSeconds()} </span>
      <span className="session"> {time.getSession()}</span>
    </div>
  )
}

export default Clock;