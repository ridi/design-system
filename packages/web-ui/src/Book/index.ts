import * as React from 'react';
import * as Book from './Book';

export class DummyBook extends React.Component {
  public static displayName = 'Book';

  public render(): any {
    throw new Error('Please don\'t use this component directly.');
  }
}

export { Book };
