import React from "react";
import Clock from 'react-live-clock';

const DateTime = props => {

  const date = new Date().toLocaleDateString();

  return (
    <div className="date-time">
      <p>
        {date} {' '}
      </p>
      <Clock
        className="live-clock"
        format={'HH:mm:ss'}
        ticking={true}
        timezone={'Europe/Warsaw'} />
    </div>

  );
};

export default DateTime;
