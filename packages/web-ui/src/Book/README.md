### Thumbnail
```jsx
import { Book } from '@ridi/web-ui';

<Book.Thumbnail
  viewType={Book.ViewType.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  thumbnailWidth={100}
  adultBadge
  updateBadge
  ridiselect
  thumbnailLink={<a href="/">Thumbnail link</a>}
  unitBook
  unitBookCount={
    <Book.UnitBookCount
      bookCount={40}
      bookCountUnit={Book.BookCountUnit.Serial}
      render="button"
    />
  }
  selectMode  
  selected
  onSelectedChange={() => {console.log('selected!')}}
  readingStatus={Book.ReadingStatus.New}
/>
```
```jsx
import { Book } from '@ridi/web-ui';

<Book.Thumbnail
  viewType={Book.ViewType.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/425063833/xlarge"
  thumbnailWidth={100}
  adultBadge
  updateBadge
  ridiselect
  notAvailable={true}
  unitBook
  unitBookCount={
    <Book.UnitBookCount
      bookCount={30}
      bookCountUnit={Book.BookCountUnit.Single}
    />
  }
  onSelectedChange={() => {console.log('selected!')}}
  readingStatus={Book.ReadingStatus.New}
/>
```
```jsx
import { Book } from '@ridi/web-ui';

<Book.Thumbnail
  viewType={Book.ViewType.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  thumbnailWidth={100}
  adultBadge
  updateBadge
  ridiselect
  unitBook
  unitBookCount={
    <Book.UnitBookCount
      bookCount={30}
      bookCountUnit={Book.BookCountUnit.Single}
      render="a"
      href="/"
    />
  }
  readingStatus={Book.ReadingStatus.Opened}
  readingProgress={20}
/>
```
```jsx
import { Book } from '@ridi/web-ui';

<Book.Thumbnail
  viewType={Book.ViewType.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  thumbnailWidth={100}
  adultBadge
  updateBadge
  ridiselect
  unitBook
  unitBookCount={
    <Book.UnitBookCount
      bookCount={30}
      bookCountUnit={Book.BookCountUnit.Single}
    />
  }
  downloadStatus={Book.DownloadStatus.Downloading}
/>
```
```jsx
import { Book } from '@ridi/web-ui';

<Book.Thumbnail
  viewType={Book.ViewType.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  thumbnailWidth={100}
  adultBadge
  updateBadge
  notAvailable
  expired
/>
```
```jsx
import { Book } from '@ridi/web-ui';

<Book.Thumbnail
  viewType={Book.ViewType.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  thumbnailWidth={100}
  adultBadge
  updateBadge
  ridiselect
  expired
/>
```
### PortraitBook
```jsx
import { Book } from '@ridi/web-ui';

<Book.PortraitBook
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  thumbnailWidth={80}
  title="위대한 소설가"
  downloadStatus={Book.DownloadStatus.Downloading}
  downloadProgress={80}
/>
```
```jsx
import { Book } from '@ridi/web-ui';

<Book.PortraitBook
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  thumbnailWidth={80}
  title="위대한 소설가"
  author="임한백"
  downloadStatus={Book.DownloadStatus.Downloading}
  downloadProgress={80}
  thumbnailLink={<a href="/">Thumbnail link</a>}
/>
```
### LandscapeBook
```jsx
import { Book } from '@ridi/web-ui';

<div style={{ border: '1px dotted magenta' }}>
  <Book.LandscapeBook
    thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
    thumbnailWidth={50}
    title="위대한 소설가"
    downloadStatus={Book.DownloadStatus.Downloading}
    downloadProgress={80}
    downloadSize={13.4}
    expiredAt="21일 4시간 남음"
    thumbnailLink={<a href="/">Thumbnail link</a>}
  />
</div>
```
```jsx
import { Book } from '@ridi/web-ui';

<div style={{ border: '1px dotted magenta' }}>
  <Book.LandscapeBook
    thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
    thumbnailWidth={60}
    title="위대한 소설가"
    author="임한백"
    adultBadge
    readingStatus={Book.ReadingStatus.Opened}
    readingProgress={30}
    annotations={{
      bookMarkCount: 4,
      highlightCount: 10,
      memoCount: 4,
    }}
    ridiselect
  />
</div>
```
```jsx
import { Book } from '@ridi/web-ui';

<div style={{ border: '1px dotted magenta' }}>
  <Book.LandscapeBook
    thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
    thumbnailWidth={60}
    title="위대한 소설가"
    author="임한백"
    unitBook
    updateBadge
    readingStatus={Book.ReadingStatus.New}
    unitBookCount={
      <Book.UnitBookCount
        bookCount={30}
        bookCountUnit={Book.BookCountUnit.Single}
        render="a"
        href="/"
      />
    }
  />
</div>
```
### Custom
```jsx
import { Book } from '@ridi/web-ui';

<div className="CustomBook">
  <Book.ThumbnailImage
    thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  />
</div>
```
```jsx
import { Book } from '@ridi/web-ui';

<div>
  <Book.DownloadButton
    downloadStatus={Book.DownloadStatus.Downloadable}
  />
  <Book.DownloadButton
    downloadStatus={Book.DownloadStatus.Wating}
  />
  <Book.DownloadButton
    downloadStatus={Book.DownloadStatus.Downloading}
    downloadProgress={80}
  />
</div>
```
