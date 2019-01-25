### Thumbnail
```jsx
const selected = true;
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
  selected={selected}
  onSelectedChange={() => {console.log('selected!')}}
  readingStatus={Book.ReadingStatus.New}
/>
```
```jsx
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
<Book.PortraitBook
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  thumbnailWidth={80}
  title="위대한 소설가"
  downloadStatus={Book.DownloadStatus.Downloading}
  downloadProgress={80}
/>
```
```jsx
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
<div className="CustomBook">
  <Book.ThumbnailImage
    thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  />
</div>
```
```jsx
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
```
