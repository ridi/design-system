# @ridi/web-ui

## Install
```bash
$ npm install @ridi/web-ui
```

## Usage
```jsx static
import { Button } from '@ridi/web-ui';

<Button>Button</Button>
```

## Support TypeScript
### Client Only Example
```typescript jsx
import * as React from 'react';
import { Book } from '@ridi/web-ui';

interface BookCoverProps {
  bookId: string
  width: number
}

const BookCover: React.FC<BookCoverProps> = props => {
  const { bookId, width } = props;
  return (
    <>
      <Book.Thumbnail
        thumbnailWidth={width}
        thumbnailUrl={`https://misc.ridibooks.com/cover/${bookId}/xxlarge`}
      />
    </>
  )
}
```

### SSR Example
> Add type declaration path to `tsconfig.json` 

```json
  "compilerOptions": {
    ...options,
    "paths": {
      "@ridi/web-ui/dist/index.node": ["./node_modules/@ridi/web-ui/dist/index.d.ts"]
    }
  }
```

and
```typescript jsx
import * as React from 'react';
import { Book } from '@ridi/web-ui/dist/index.node';

interface BookCoverProps {
  bookId: string
  width: number
}

const BookCover: React.FC<BookCoverProps> = props => {
  const { bookId, width } = props;
  return (
    <>
      <Book.Thumbnail
        thumbnailWidth={width}
        thumbnailUrl={`https://misc.ridibooks.com/cover/${bookId}/xxlarge`}
      />
    </>
  )
}
```