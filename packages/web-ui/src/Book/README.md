### Thumbnail

```jsx
import { Book } from '@ridi/web-ui';

<div style={{ width: '200px' }}>
  <Book.Thumbnail thumbnailUrl="https://misc.ridibooks.com/cover/204000008/xxlarge?dpi=xxhdpi" />
</div>
```

```jsx
import { Book } from '@ridi/web-ui';

<Book.Thumbnail
  thumbnailTitle="그레이의 50가지 그림자" // default '도서 표지'
  thumbnailUrl="https://misc.ridibooks.com/cover/862000002/xxlarge?dpi=xxhdpi"
  thumbnailWidth={150} // default '100%'
  viewType={Book.ViewType.Portrait} // default ViewType.Portrait
  
  updateBadge
  adultBadge
  thumbnailLink={<a href="/">Thumbnail link</a>}
/>
```

```jsx
import { Book } from '@ridi/web-ui';

<Book.Thumbnail
  thumbnailTitle="펭귄클래식 세계문학 50권 세트(이성 편)"
  thumbnailUrl="https://misc.ridibooks.com/cover/606001281/xxlarge?dpi=xxhdpi"
  thumbnailWidth={100}
  viewType={Book.ViewType.Portrait}

  unitBook
  unitBookCount={
    <Book.UnitBookCount
      bookCount={50}
      bookCountUnit={Book.BookCountUnit.Single}
      render="button"
    />
  }
/>
```

```jsx
import { Book } from '@ridi/web-ui';

<Book.Thumbnail
  thumbnailTitle="펭귄클래식 세계문학 50권 세트(이성 편)"
  thumbnailUrl="https://misc.ridibooks.com/cover/606001281/xxlarge?dpi=xxhdpi"
  thumbnailWidth={100}
  viewType={Book.ViewType.Portrait}

  unitBook
  unitBookCount={
    <Book.UnitBookCount
      bookCount={50}
      bookCountUnit={Book.BookCountUnit.Single}
      render="button"
    />
  }

  selectMode  
  selected
  onSelectedChange={() => {console.log('selected!')}}
/>
```

```jsx
import { Book } from '@ridi/web-ui';

<Book.Thumbnail
  thumbnailTitle="거울로 드나드는 여자 1권"
  thumbnailUrl="https://misc.ridibooks.com/cover/3769000001/xxlarge?dpi=xxhdpi"
  thumbnailWidth={100}
  
  expiredAt="21일 4시간 남음"
/>
```

```jsx
import { Book } from '@ridi/web-ui';

<Book.Thumbnail
  thumbnailTitle="거울로 드나드는 여자 1권"
  thumbnailUrl="https://misc.ridibooks.com/cover/3769000001/xxlarge?dpi=xxhdpi"
  thumbnailWidth={100}
  
  expired
/>
```

```jsx
import { Book } from '@ridi/web-ui';

<Book.Thumbnail
  thumbnailTitle="거울로 드나드는 여자 1권"
  thumbnailUrl="https://misc.ridibooks.com/cover/3769000001/xxlarge?dpi=xxhdpi"
  thumbnailWidth={100}
  
  expired
  notAvailable
/>
```

```jsx
import { Book } from '@ridi/web-ui';

<Book.Thumbnail
  thumbnailTitle="머리를 비우는 뇌과학"
  thumbnailUrl="https://misc.ridibooks.com/cover/856000168/xxlarge?dpi=xxhdpi"
  thumbnailWidth={100}

  ridiselect

  downloadStatus={Book.DownloadStatus.Downloadable}
/>
```

```jsx
import { Book } from '@ridi/web-ui';

<Book.Thumbnail
  thumbnailTitle="머리를 비우는 뇌과학"
  thumbnailUrl="https://misc.ridibooks.com/cover/856000168/xxlarge?dpi=xxhdpi"
  thumbnailWidth={100}

  ridiselect

  downloadStatus={Book.DownloadStatus.Downloading}
  downloadProgress={80}
/>
```

```jsx
import { Book } from '@ridi/web-ui';

<Book.Thumbnail
  thumbnailTitle="머리를 비우는 뇌과학"
  thumbnailUrl="https://misc.ridibooks.com/cover/856000168/xxlarge?dpi=xxhdpi"
  thumbnailWidth={100}

  ridiselect

  readingStatus={Book.ReadingStatus.New}
  updateBadge
/>
```


```jsx
import { Book } from '@ridi/web-ui';

<Book.Thumbnail
  thumbnailTitle="머리를 비우는 뇌과학"
  thumbnailUrl="https://misc.ridibooks.com/cover/856000168/xxlarge?dpi=xxhdpi"
  thumbnailWidth={100}

  ridiselect
  
  readingStatus={Book.ReadingStatus.Opened}
  readingProgress={20}
/>
```

### PortraitBook
```jsx
import { Book } from '@ridi/web-ui';

<Book.PortraitBook
  thumbnailTitle="말의 내공"
  thumbnailUrl="https://misc.ridibooks.com/cover/226000072/xxlarge?dpi=xxhdpi"
  thumbnailWidth={80}
  thumbnailLink={<a href="/">Thumbnail link</a>}

  title="말의 내공"
  author="임한백"
  ridiselect
  
  readingStatus={Book.ReadingStatus.Opened}
  readingProgress={20}
/>
```

```jsx
import { Book } from '@ridi/web-ui';

<Book.PortraitBook
  thumbnailTitle="거울로 드나드는 여자 1권"
  thumbnailUrl="https://misc.ridibooks.com/cover/3769000001/xxlarge?dpi=xxhdpi"
  thumbnailWidth={80}
  
  expired
  notAvailable

  additionalMetadata={
    <p>metadata</p>
  }
  additionalButton={
    <button>button</button>
  }
  portraitStyles={{
    background: 'rgba(255, 0, 0, .3)',
  }}
/>
```

### LandscapeBook
```jsx
import { Book } from '@ridi/web-ui';

<div style={{ border: '1px dotted magenta' }}>
  <Book.LandscapeBook
    thumbnailTitle="펭귄클래식 세계문학 50권 세트(이성 편)"
    thumbnailUrl="https://misc.ridibooks.com/cover/606001281/xxlarge?dpi=xxhdpi"
    thumbnailWidth={50}
    thumbnailLink={<a href="/">Thumbnail link</a>}

    title="펭귄클래식 세계문학 50권 세트(이성 편)"
    expiredAt="21일 4시간 남음"
    
    unitBook
    unitBookCount={
      <Book.UnitBookCount
        bookCount={50}
        bookCountUnit={Book.BookCountUnit.Single}
        render="a"
        href="/"
      />
    }

    readingStatus={Book.ReadingStatus.New}
  />
</div>
```

```jsx
import { Book } from '@ridi/web-ui';

<div style={{ border: '1px dotted magenta' }}>
  <Book.LandscapeBook
    thumbnailTitle="머리를 비우는 뇌과학"
    thumbnailUrl="https://misc.ridibooks.com/cover/856000168/xxlarge?dpi=xxhdpi"
    thumbnailWidth={60}

    title="머리를 비우는 뇌과학"
    author="닐스 비르바우머, 외르크 치틀라우 저, 오공훈 역"
    ridiselect

    readingStatus={Book.ReadingStatus.Opened}
    readingProgress={30}
    annotations={{
      bookMarkCount: 4,
      highlightCount: 10,
      memoCount: 4,
    }}
  />
</div>
```

```jsx
import { Book } from '@ridi/web-ui';

<div style={{ border: '1px dotted magenta' }}>
  <Book.LandscapeBook
    thumbnailTitle="말의 내공"
    thumbnailUrl="https://misc.ridibooks.com/cover/226000072/xxlarge?dpi=xxhdpi"
    thumbnailWidth={60}

    title="말의 내공"
    author="신도현, 윤나루"
    updateBadge

    downloadStatus={Book.DownloadStatus.Downloading}
    downloadProgress={80}
    downloadSize={13.4}
  />
</div>
```


```jsx
import { Book } from '@ridi/web-ui';

<div style={{ border: '1px dotted magenta' }}>
  <Book.LandscapeBook
    thumbnailTitle="거울로 드나드는 여자 1권"
    thumbnailUrl="https://misc.ridibooks.com/cover/3769000001/xxlarge?dpi=xxhdpi"
    thumbnailWidth={80}

    title="거울로 드나드는 여자 1권"
    author="크리스텔 다보스 "
    
    additionalMetadata={
      <p><strong>1권</strong> / 총 20권</p>
    }
    additionalButton={
      <button>이어보기</button>
    }
    landscapeStyles={{
      paddingTop: 20,
      background: 'rgba(0, 255, 0, .3)',
    }}
  />
</div>
```
