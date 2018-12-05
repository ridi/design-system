import * as React from 'react';

export interface BaseProps {
  /**
   * *[Inherited]* A render function or any React type for rendering root component.
   */
  render?: React.ReactType;

  /**
   * For passing through props to root component.
   */
  [key: string]: any;
}
