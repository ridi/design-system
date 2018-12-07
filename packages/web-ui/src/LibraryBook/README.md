### Thumbnail
```jsx
const selected = true;
<LibraryBook.Thumbnail
  viewType={LibraryBook.ViewType.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  adultBadge
  updateBadge
  ridiselect
  unitBook
  bookCount={50}
  bookCountUnit={LibraryBook.BookCountUnit.Serial}
  bookCountWrapper={{
    wrapper: 'a',
    getProps() {
      return {
        href: '#',
      };
    },
  }}
  selectMode
  selected={selected}
  onSelectedChange={() => {console.log('selected!')}}
  readingStatus={LibraryBook.ReadingStatus.New}
/>
```
```jsx
<LibraryBook.Thumbnail
  viewType={LibraryBook.ViewType.Portrait}
  thumbnailUrl="//misc.ridibooks.com/cover/425063833/xlarge"
  adultBadge
  updateBadge
  ridiselect
  notAvailable={true}
  unitBook
  bookCount={50}
  bookCountUnit={LibraryBook.BookCountUnit.Serial}
  bookCountWrapper={{
    wrapper: 'a',
    getProps() {
      return {
        href: '#',
      };
    },
  }}
  onSelectedChange={() => {console.log('selected!')}}
  readingStatus={LibraryBook.ReadingStatus.New}
/>
```
```jsx
<LibraryBook.Thumbnail
  viewType={LibraryBook.ViewType.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  adultBadge
  updateBadge
  ridiselect
  unitBook
  bookCount={50}
  bookCountUnit={LibraryBook.BookCountUnit.Serial}
  bookCountWrapper={{
    wrapper: 'a',
    getProps() {
      return {
        href: '#',
      };
    },
  }}
  readingStatus={LibraryBook.ReadingStatus.Opened}
  readingProgress={20}
/>
```
```jsx
<LibraryBook.Thumbnail
  viewType={LibraryBook.ViewType.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  adultBadge
  updateBadge
  ridiselect
  unitBook
  bookCount={50}
  bookCountUnit={LibraryBook.BookCountUnit.Serial}
  downloadStatus={LibraryBook.DownloadStatus.Downloading}
/>
```
```jsx
<LibraryBook.Thumbnail
  viewType={LibraryBook.ViewType.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  adultBadge
  updateBadge
  notAvailable
  expired
/>
```
```jsx
<LibraryBook.Thumbnail
  viewType={LibraryBook.ViewType.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  adultBadge
  updateBadge
  ridiselect
  expired
/>
```
### PortraitBook
```jsx
<LibraryBook.PortraitBook
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  title="위대한 소설가"
  downloadStatus={LibraryBook.DownloadStatus.Downloading}
  downloadProgress={80}
/>
```
```jsx
<LibraryBook.PortraitBook
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  title="위대한 소설가"
  author="임한백"
  downloadStatus={LibraryBook.DownloadStatus.Downloading}
  downloadProgress={80}
/>
```
### LandscapeBook
```jsx
<div style={{ border: '1px dotted magenta' }}>
  <LibraryBook.LandscapeBook
    thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
    thumbnailWidth={50}
    title="위대한 소설가"
    downloadStatus={LibraryBook.DownloadStatus.Downloading}
    downloadProgress={80}
    downloadSize={13.4}
    expiredAt="21일 4시간 남음"
  />
</div>
```
```jsx
<div style={{ border: '1px dotted magenta' }}>
  <LibraryBook.LandscapeBook
    thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
    thumbnailWidth={60}
    title="위대한 소설가"
    author="임한백"
    adultBadge
    readingStatus={LibraryBook.ReadingStatus.Opened}
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
  <LibraryBook.LandscapeBook
    thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
    thumbnailWidth={60}
    title="위대한 소설가"
    author="임한백"
    unitBook
    updateBadge
    readingStatus={LibraryBook.ReadingStatus.New}
    bookCount={50}
    bookCountUnit={LibraryBook.BookCountUnit.Serial}
    bookCountWrapper={{
      wrapper: 'a',
      getProps() {
        return {
          href: '#',
        };
      },
    }}
  />
</div>
```
### Custom
```jsx
<div className="CustomBook">
  <LibraryBook.ThumbnailImage
    thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  />
</div>
```
```jsx
<LibraryBook.DownloadButton
  downloadStatus={LibraryBook.DownloadStatus.Downloadable}
/>
<LibraryBook.DownloadButton
  downloadStatus={LibraryBook.DownloadStatus.Wating}
/>
<LibraryBook.DownloadButton
  downloadStatus={LibraryBook.DownloadStatus.Downloading}
  downloadProgress={80}
/>
```
