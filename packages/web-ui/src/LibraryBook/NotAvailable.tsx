import * as React from 'react';
import NotAvailableIcon from './svgs/not_available_1.svg';

export const NotAvailable: React.SFC = () => (
  <p className="NotAvailable">
    <NotAvailableIcon className="NotAvailable_Icon"/>
    <span className="NotAvailable_Text">이용불가</span>
  </p>
);
