import { default as Icons, Icons as IconsInterface } from '@ridi/web-icons/dist/icons';
import * as React from 'react';

export interface IconProps {
  /**
   * Icon name
   */
  name: keyof IconsInterface;

  [key: string]: any;
}

export const Icon: React.SFC<IconProps> = ({
  name,
  ...restProps
}) => {
  const icon = Icons[name];

  if (!icon) {
    return null;
  }

  const [width, height, contents] = icon;
  const viewBox = `0 0 ${width} ${height}`;

  return (
    <svg
      viewBox={viewBox}
      width={width}
      height={height}
      dangerouslySetInnerHTML={{ __html: contents }}
      {...restProps}
    />
  );
};
