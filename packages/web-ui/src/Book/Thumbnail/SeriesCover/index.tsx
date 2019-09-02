/** @jsx jsx */
import { jsx } from '@emotion/core';
import Vibrant from 'node-vibrant';
import { Palette as VibrantPalette } from 'node-vibrant/lib/color';
import * as React from 'react';
import { ThumbnailImageProps } from 'src/Book/ThumbnailImage';
import { SERIES_BOOK_SCALE } from '../styles';
import * as styles from './styles';

export interface RGB {
  r: number;
  g: number;
  b: number;
}

const SERIES_COVER_COUNT = 2;
const MARGIN_PERCENTAGE = (1 - SERIES_BOOK_SCALE) / SERIES_COVER_COUNT;
const SERIES_COVER_DEFAULT_COLOR: RGB = {
  r: 230,
  g: 232,
  b: 235,
};

export const SeriesCover: React.FunctionComponent<ThumbnailImageProps> = ({ thumbnailWidth, thumbnailUrl }) => {
  const [dominantColor, setDominantColor] = React.useState(SERIES_COVER_DEFAULT_COLOR);
  const defaultMargin = Math.round(thumbnailWidth * MARGIN_PERCENTAGE);
  React.useEffect(() => {
    const thumbnailImage = new Image();
    thumbnailImage.crossOrigin = 'anonymous';
    thumbnailImage.src = thumbnailUrl;
    try {
      Vibrant
        .from(thumbnailImage)
        .getPalette()
        .then((palette: VibrantPalette) => {
          const rgb =
            palette.Muted ||
            palette.DarkMuted ||
            SERIES_COVER_DEFAULT_COLOR;
          setDominantColor(rgb);
        });
    } catch (error) {
      setDominantColor(SERIES_COVER_DEFAULT_COLOR);
    }
  }, [thumbnailUrl]);

  return (
    <React.Fragment>
      {Array.from({ length: SERIES_COVER_COUNT }, (_, index) => {
        const coverMargin = defaultMargin * (SERIES_COVER_COUNT - index);
        return <div key={`seriesCover${index}`} css={styles.seriesCover(coverMargin, dominantColor)}/>
      })}
    </React.Fragment>
  );
};
