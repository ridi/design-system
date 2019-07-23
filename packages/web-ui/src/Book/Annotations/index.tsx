/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import BookMarkIcon from 'src/svgs/Bookmark.svg';
import PencilIcon from 'src/svgs/Highlighting.svg';
import MessageIcon from 'src/svgs/Memo.svg';
import * as styles from './styles';

export interface AnnotationsProps {
  bookMarkCount: number;
  highlightCount: number;
  memoCount: number;
}

export const Annotations: React.FunctionComponent<{ annotations: AnnotationsProps }> = (props) => (
  <ul css={styles.annotations}>
    <li css={styles.annotationItem}>
      <span css={styles.annotationTitle}>북마크: </span>
      <BookMarkIcon css={styles.bookMarkIcon}/>
      <span css="Annotation_Count">{props.annotations.bookMarkCount}</span>
    </li>
    <li css={styles.annotationItem}>
      <span css={styles.annotationTitle}>형광펜: </span>
      <PencilIcon css={styles.hightlightIcon}/>
      <span css="Annotation_Count">{props.annotations.highlightCount}</span>
    </li>
    <li css={styles.annotationItem}>
      <span css={styles.annotationTitle}>메모: </span>
      <MessageIcon css={styles.memoIcon} />
      <span css="Annotation_Count">{props.annotations.memoCount}</span>
    </li>
  </ul>
);
