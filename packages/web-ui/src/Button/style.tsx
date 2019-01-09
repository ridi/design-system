import { keyframes } from '@emotion/core';
import colors from '@ridi/colors';
import { flow, merge } from 'lodash';
import { rgba } from 'polished';
import * as React from 'react';
import { resetAppearance, resetFont, resetLayout } from '../styles';
import { Svg } from '../Svg';
import { ButtonProps } from './index';
import LoadingIcon from './spinner.svg';

export default ({
  color,
  disabled,
  outline,
  size,
  loading,
  thickBorder,
}: ButtonProps) => {
  const resetStyle = () => merge({},
    resetAppearance,
    resetFont,
    resetLayout,
  );

  const defaultStyle = (style: any) => merge(
    style,
    {

      display: 'inline-block',
      boxSizing: 'border-box',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 4,
      fontSize: 13,
      fontWeight: 700,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      verticalAlign: 'baseline',
      textDecoration: 'none',
      transition: 'background .2s, color .2s',
      WebkitTapHighlightColor: 'transparent',

      '&:not([disabled])': {
        cursor: 'pointer',
      },

      '&[disabled]': {
        opacity: .5,
        cursor: 'not-allowed',
        outline: 'none',
      },
    },
  );

  const borderStyle = (style: any) => merge(
    style,
    thickBorder && {
      borderWidth: 2,
    },
  );

  const paddingStyle = (style: any) => merge(
    style,
    {
      padding: `0 ${20 - style.borderWidth}px`,
    },
  );

  const lineHeightStyle = (style: any) => {
    switch (size) {
      case 'small':
        return merge(
          style,
          {
            lineHeight: `${26 - 2 * style.borderWidth}px`,
          },
        );
      case 'large':
        return merge(
          style,
          {
            lineHeight: `${42 - 2 * style.borderWidth}px`,
          },
        );
      case 'medium':
      default:
        return merge(
          style,
          {
            lineHeight: `${32 - 2 * style.borderWidth}px`,
          },
        );
    }
  };

  const colorStyle = (style: any) => {
    switch (color) {
      case 'blue':
        return merge(
          style,
          {
            color: 'white',
            backgroundColor: colors.dodgerblue_50,
            borderColor: colors.dodgerblue_60,
            boxShadow: `0 1px 1px 0 ${rgba(colors.dodgerblue_50, .3)}`,

            '&:not([disabled])': {
              '&:hover': {
                backgroundColor: colors.dodgerblue_60,
              },
            },
          },
        );
      case 'brown':
        return merge(
          style,
          {
            color: 'white',
            backgroundColor: colors.brown_50,
            borderColor: colors.brown_60,
            boxShadow: `0 1px 1px 0 ${rgba(colors.brown_50, .3)}`,

            '&:not([disabled])': {
              '&:hover': {
                backgroundColor: colors.brown_60,
              },
            },
          },
        );
      case 'gray':
      default:
        return merge(
          style,
          {
            color: 'white',
            backgroundColor: colors.slategray_50,
            borderColor: colors.slategray_60,
            boxShadow: `0 1px 1px 0 ${rgba(colors.slategray_50, .3)}`,

            '&:not([disabled])': {
              '&:hover': {
                backgroundColor: colors.slategray_60,
              },
            },
          },
        );
    }
  };

  const outlineStyle = (style: any) => {
    if (!outline) {
      return style;
    }

    switch (color) {
      case 'blue':
        return merge(
          style,
          {
            color: colors.dodgerblue_50,
            backgroundColor: 'white',
            borderColor: colors.dodgerblue_50,
            boxShadow: `0 1px 1px 0 ${rgba(colors.dodgerblue_50, .3)}`,

            '&:not([disabled])': {
              '&:hover': {
                backgroundColor: colors.dodgerblue_10,
              },
            },
          },
        );
      case 'brown':
        return merge(
          style,
          {
            color: colors.brown_50,
            backgroundColor: 'white',
            borderColor: colors.brown_50,
            boxShadow: `0 1px 1px 0 ${rgba(colors.brown_50, .3)}`,

            '&:not([disabled])': {
              '&:hover': {
                backgroundColor: colors.brown_10,
              },
            },
          },
        );
      case 'gray':
      default:
        return merge(
          style,
          {
            color: colors.slategray_50,
            backgroundColor: 'white',
            borderColor: colors.slategray_20,
            boxShadow: `0 1px 1px 0 ${rgba(colors.slategray_20, .3)}`,

            '&:not([disabled])': {
              '&:hover': {
                backgroundColor: colors.slategray_10,
              },
            },
          },
        );
    }
  };

  const loadingStyle = (style: any) => merge(
    style,
    loading && {
      position: 'relative',
      color: 'transparent',

      '& > *': {
        opacity: 0,
      },

      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: style.lineHeight,
        height: style.lineHeight,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundImage: `url(${Svg.renderToDataUri(<LoadingIcon stroke={style.color} />)})`,
        transform: 'translate3d(-50%, -50%, 0) scale(0.7)',
        animation: `${(
          keyframes({
            '0%': { transform: 'translate3d(-50%, -50%, 0) rotate(0deg) scale(0.7)' },
            '8%': { transform: 'translate3d(-50%, -50%, 0) rotate(30deg) scale(0.7)' },
            '17%': { transform: 'translate3d(-50%, -50%, 0) rotate(60deg) scale(0.7)' },
            '25%': { transform: 'translate3d(-50%, -50%, 0) rotate(90deg) scale(0.7)' },
            '33%': { transform: 'translate3d(-50%, -50%, 0) rotate(120deg) scale(0.7)' },
            '42%': { transform: 'translate3d(-50%, -50%, 0) rotate(150deg) scale(0.7)' },
            '50%': { transform: 'translate3d(-50%, -50%, 0) rotate(180deg) scale(0.7)' },
            '58%': { transform: 'translate3d(-50%, -50%, 0) rotate(210deg) scale(0.7)' },
            '67%': { transform: 'translate3d(-50%, -50%, 0) rotate(240deg) scale(0.7)' },
            '75%': { transform: 'translate3d(-50%, -50%, 0) rotate(270deg) scale(0.7)' },
            '83%': { transform: 'translate3d(-50%, -50%, 0) rotate(300deg) scale(0.7)' },
            '92%': { transform: 'translate3d(-50%, -50%, 0) rotate(330deg) scale(0.7)' },
            '100%': { transform: 'translate3d(-50%, -50%, 0) rotate(360deg) scale(0.7)' },
          })
        )} 1s step-start forwards infinite`,
      },
    },
  );

  return flow(
    resetStyle,
    defaultStyle,
    borderStyle,
    paddingStyle,
    lineHeightStyle,
    colorStyle,
    outlineStyle,
    loadingStyle,
  )();
}
