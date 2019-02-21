/** @jsx jsx */
import { jsx } from '@emotion/core';
import classNames from 'classnames';
import * as React from 'react';
import * as styles from './styles';

export interface ThumbnailImageProps {
  thumbnailUrl: string;
  thumbnailTitle?: string;
  thumbnailWidth?: number | string;
  className?: string;
}

export interface ThumbnailImageState {
  isImageLoaded: boolean;
}

export class ThumbnailImage extends React.Component<ThumbnailImageProps, ThumbnailImageState> {
  constructor(props: ThumbnailImageProps) {
    super(props);
    this.state = {
      isImageLoaded: false,
    };
  }

  public handleOnLoaded = () => {
    this.setState({
      isImageLoaded: true,
    });
  };

  public render() {
    const {thumbnailUrl, thumbnailTitle='도서 표지', className, thumbnailWidth} = this.props;
    const {isImageLoaded} = this.state;

    return (
      <div className={classNames(className)} css={styles.thumbnailImage}>
        <img
          css={styles.image(isImageLoaded, thumbnailWidth)}
          src={thumbnailUrl}
          alt={thumbnailTitle}
          onLoad={this.handleOnLoaded}
        />
      </div>
    );
  }
};

