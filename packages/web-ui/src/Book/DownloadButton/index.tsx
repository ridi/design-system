/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import DownloadableIcon from 'src/svgs/DownloadableCircle.svg';
import WaitingIcon from 'src/svgs/DownloadWaiting.svg';
import * as styles from './styles';

export enum DownloadStatus {
  Downloadable = 'downloadable',
  Wating = 'wating',
  Downloading = 'downloading',
  Downloaded = 'downloaded',
}

export interface DownloadButtonProps {
  downloadSize?: number;
  downloadStatus?: DownloadStatus;
  downloadProgress?: number;
  size ?: styles.DownloadButtonSize;
  onStartDownload?: () => void;
  onStopDownload?: () => void;
}

export const DownloadButton: React.FunctionComponent<DownloadButtonProps> = ({
  downloadSize,
  downloadStatus,
  downloadProgress,
  size = styles.DownloadButtonSize.Small,
}) => {
  switch (downloadStatus) {
    case DownloadStatus.Downloadable:
      return (
        <div css={styles.buttonWrapper}>
          <button css={styles.downloadButton(size, downloadStatus)}>
            <DownloadableIcon css={styles.downloadableIcon}/>
          </button>
          {downloadSize && <p css={styles.downloadSize}>{downloadSize}MB</p>}
        </div>
      );
    case DownloadStatus.Wating:
      return (
        <div css={styles.blocked}>
          <button css={styles.downloadButton(size, downloadStatus)}>
            <WaitingIcon css={styles.waitingIcon}/>
          </button>
          {downloadSize && <p css={styles.downloadSize}>{downloadSize}MB</p>}
        </div>
      );
    case DownloadStatus.Downloading:
      const deg = Math.min(360, Math.max(0, (downloadProgress / 100) * 360)) / 2;
      return (
        <div css={styles.blocked}>
          <button css={styles.downloadButton(size, downloadStatus)}>
            <div css={styles.progressMask(size)}>
              <div css={styles.progressFill(size, deg)} />
            </div>
            <div css={styles.progressMask(size, deg)}>
              <div css={styles.progressFill(size, deg)} />
            </div>
            <div css={styles.stopRect(size)} />
          </button>
          {downloadSize && <p css={styles.downloadSize}>{downloadSize}MB</p>}
        </div>
      );
    default: return null;
  }
};
