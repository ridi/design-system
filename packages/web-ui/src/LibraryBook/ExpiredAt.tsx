import * as React from 'react';
import TimerIcon from './svgs/timer.svg';

export interface ExpiredAtProps {
  expiredAt: string;
}

export const ExpiredAt: React.SFC<ExpiredAtProps> = (props) => (
  <p className="ExpiredAt">
    <TimerIcon className="ExpiredAt_Icon"/>
    {props.expiredAt}
  </p>
);
