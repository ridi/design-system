import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Base, BaseProps } from './Base';

export interface SvgProps extends BaseProps {}

export function Svg(props: SvgProps): React.ReactElement<SvgProps> {
  return (
    <Base {...props} />
  );
}

Svg.defaultProps = {
  render: 'svg',
};

// tslint:disable-next-line:no-namespace
export namespace Svg {
  export const renderToDataUri = (element: React.ReactElement<any>): string => {
    const svgString = ReactDOMServer.renderToStaticMarkup((
      <element.type xmlns="http://www.w3.org/2000/svg" {...element.props} />
    ));
    return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
  };
}
