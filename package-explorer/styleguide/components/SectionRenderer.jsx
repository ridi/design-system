import React from 'react';
import SectionRenderer from 'react-styleguidist/lib/client/rsg-components/Section/SectionRenderer';

export default (props) => (
  <SectionRenderer {...props} name={props.depth > 1 ? props.name : undefined} />
);
