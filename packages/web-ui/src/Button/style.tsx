import { keyframes } from '@emotion/core';
import colors from '@ridi/colors';
import { merge, reduce } from 'lodash';
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
  const defaultStyle = {
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
  };

  const borderStyle = thickBorder && {
    borderWidth: 2,
  };

  const paddingStyle = (style: any) => ({
    padding: `0 ${20 - style.borderWidth}px`,
  });

  const lineHeightStyle = (style: any) => {
    switch (size) {
      case 'small':
        return {
          lineHeight: `${26 - 2 * style.borderWidth}px`,
        };
      case 'large':
        return {
          lineHeight: `${42 - 2 * style.borderWidth}px`,
        };
      case 'medium':
      default:
        return {
          lineHeight: `${32 - 2 * style.borderWidth}px`,
        };
    }
  };

  const colorStyle = () => {
    switch (color) {
      case 'blue':
        return {
          color: 'white',
          backgroundColor: colors.dodgerBlue50,
          borderColor: colors.dodgerBlue60,
          boxShadow: `0 1px 1px 0 ${rgba(colors.dodgerBlue50, .3)}`,

          '&:not([disabled])': {
            '&:hover': {
              backgroundColor: colors.dodgerBlue60,
            },
          },
        };
      case 'brown':
        return {
          color: 'white',
          backgroundColor: colors.brown50,
          borderColor: colors.brown60,
          boxShadow: `0 1px 1px 0 ${rgba(colors.brown50, .3)}`,

          '&:not([disabled])': {
            '&:hover': {
              backgroundColor: colors.brown60,
            },
          },
        };
      case 'gray':
      default:
        return {
          color: 'white',
          backgroundColor: colors.slateGray50,
          borderColor: colors.slateGray60,
          boxShadow: `0 1px 1px 0 ${rgba(colors.slateGray50, .3)}`,

          '&:not([disabled])': {
            '&:hover': {
              backgroundColor: colors.slateGray60,
            },
          },
        };
    }
  };

  const outlineStyle = outline && (() => {
    switch (color) {
      case 'blue':
        return {
          color: colors.dodgerBlue50,
          backgroundColor: 'white',
          borderColor: colors.dodgerBlue50,
          boxShadow: `0 1px 1px 0 ${rgba(colors.dodgerBlue50, .3)}`,

          '&:not([disabled])': {
            '&:hover': {
              backgroundColor: colors.dodgerBlue10,
            },
          },
        };
      case 'brown':
        return {
          color: colors.brown50,
          backgroundColor: 'white',
          borderColor: colors.brown50,
          boxShadow: `0 1px 1px 0 ${rgba(colors.brown50, .3)}`,

          '&:not([disabled])': {
            '&:hover': {
              backgroundColor: colors.brown10,
            },
          },
        };
      case 'gray':
      default:
        return {
          color: colors.slateGray50,
          backgroundColor: 'white',
          borderColor: colors.slateGray20,
          boxShadow: `0 1px 1px 0 ${rgba(colors.slateGray20, .3)}`,

          '&:not([disabled])': {
            '&:hover': {
              backgroundColor: colors.slateGray10,
            },
          },
        };
    }
  });

  const loadingStyle = loading && ((style: any) => ({
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
  }));

  const styles = [
    resetAppearance,
    resetFont,
    resetLayout,

    defaultStyle,
    borderStyle,
    paddingStyle,
    lineHeightStyle,
    colorStyle,
    outlineStyle,
    loadingStyle,
  ];

  return reduce<object | ((style: object) => object), any>(
    styles,
    (merged, v) => merge(merged, (v instanceof Function) ? v(merged) : v),
    {},
  );
}
