import * as React from 'react';

export interface AuthorProps {
  author: string;
}

export const Author: React.SFC<AuthorProps> = (props) => (
  <p className="Author">{props.author}</p>
);
