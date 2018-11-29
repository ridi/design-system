import * as React from 'react';
import BookMarkIcon from './svgs/book_mark_1.svg';
import MessageIcon from './svgs/message_1.svg';
import PencilIcon from './svgs/pencil_2.svg';

export interface AnnotationsProps {
  bookMarkCount: number;
  highlightCount: number;
  memoCount: number;
}

export const Annotations: React.SFC<{ annotations: AnnotationsProps }> = (props) => (
  <ul className="Annotations">
    <li className="Annotation_Item">
      <span className="Annotation_Title">북마크: </span>
      <BookMarkIcon className="Annotation_Icon Annotation_Icon-bookMark"/>
      <span className="Annotation_Count">{props.annotations.bookMarkCount}</span>
    </li>
    <li className="Annotation_Item">
      <span className="Annotation_Title">형광펜: </span>
      <PencilIcon className="Annotation_Icon Annotation_Icon-highlight"/>
      <span className="Annotation_Count">{props.annotations.highlightCount}</span>
    </li>
    <li className="Annotation_Item">
      <span className="Annotation_Title">메모: </span>
      <MessageIcon className="Annotation_Icon Annotation_Icon-memo" />
      <span className="Annotation_Count">{props.annotations.memoCount}</span>
    </li>
  </ul>
);
