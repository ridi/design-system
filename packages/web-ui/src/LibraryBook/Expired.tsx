import * as React from 'react';
import TimerIcon from './svgs/timer.svg';

export const Expired: React.SFC = () => (
  <p className="Expired">
    <TimerIcon className="Expired_Icon"/>
    기간 만료
  </p>
);
