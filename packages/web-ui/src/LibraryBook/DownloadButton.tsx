import * as React from 'react';
import DownloadableIcon from './svgs/btn_downloadable.svg';
import WaitingIcon from './svgs/btn_waiting.svg';

export enum DOWNLOAD_STATUS {
  Downloadable = 'downloadable',
  Wating = 'wating',
  Downloading = 'downloading',
  Downloaded = 'downloaded',
}

export interface DownloadStatusProps {
  downloadSize?: number;
  downloadStatus?: DOWNLOAD_STATUS;
  downloadProgress?: number;
  size ?: 'small' | 'large';
  onStartDownload?: () => void;
  onStopDownload?: () => void;
}

export const DownloadButton: React.SFC<DownloadStatusProps> = ({
  downloadSize,
  downloadStatus,
  downloadProgress,
  size = 'small',
}) => {
  switch (downloadStatus) {
    case DOWNLOAD_STATUS.Downloadable:
      return (
        <div className="DownloadButton_Wrapper">
          <button className={`DownloadButton DownloadButton-size-${size} DownloadButton-downloadable`}>
            <DownloadableIcon className="Downloadable_icon"/>
          </button>
          {downloadSize && <p className="DownloadSize">{downloadSize}MB</p>}
        </div>
      );
    case DOWNLOAD_STATUS.Wating:
      return (
        <div className="DownloadButton_Wrapper DownloadButton_Wrapper-blocked">
          <button className={`DownloadButton DownloadButton-size-${size} DownloadButton-waiting`}>
            <WaitingIcon className="Waiting_icon"/>
          </button>
          {downloadSize && <p className="DownloadSize">{downloadSize}MB</p>}
        </div>
      );
    case DOWNLOAD_STATUS.Downloading:
      const deg = Math.min(360, Math.max(0, (downloadProgress / 100) * 360)) / 2;
      const style = { transform: `rotate(${deg}deg)` };
      return (
        <div className="DownloadButton_Wrapper DownloadButton_Wrapper-blocked">
          <button className={`DownloadButton DownloadButton-size-${size} DownloadButton-downloading`}>
            <div className="mask"><div className="fill" style={style} /></div>
            <div className="mask" style={style}><div className="fill" style={style} /></div>
            <div className="stop"/>
          </button>
          {downloadSize && <p className="DownloadSize">{downloadSize}MB</p>}
        </div>
      );
    default: return null;
  }
};
