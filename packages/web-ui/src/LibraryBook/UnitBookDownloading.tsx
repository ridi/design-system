import * as React from 'react';

export interface UnitBookDownloadingProps {
  size ?: 'small' | 'large';
}

export const UnitBookDownloading: React.SFC<UnitBookDownloadingProps> = ({ size = 'small' }) => (
  <div className="UnitBookDownloading_Wrapper UnitBookDownloading_Wrapper-blocked">
    <div className={`UnitBookDownloading UnitBookDownloading-size-${size} UnitBookDownloading-downloading`}>
      <div className="UnitBookDownloading_Dots"/>
    </div>
  </div>
);
