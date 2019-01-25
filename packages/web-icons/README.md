# @ridi/web-icons

## Install

```bash
$ npm install @ridi/web-icons
```

## Usage

With [`url-loader`](https://www.npmjs.com/package/url-loader):
```jsx static
import { airplane } from '@ridi/web-icons';

<img src={airplane} />
```

With [SVGR](https://github.com/smooth-code/svgr):
```jsx static
import { airplane: Airplane } from '@ridi/web-icons';

<Airplane />
```

## Icons

```jsx
/**
 * This example assumes using [SVGR](https://github.com/smooth-code/svgr).
 */

const icons = require('@ridi/web-icons');
const { version } = require('@ridi/web-icons/package.json');
const { snakeCase } = require('lodash');

<div
  style={{
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
  }}
>
  {Object.keys(icons).map((name, index, array) => {
    const Icon = icons[name];

    return (
      <div
        key={name}
        style={{
          flex: index === array.length - 1 && 1,
          margin: '10px',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            color: 'black',
            textAlign: 'center',
            textDecoration: 'none',
          }}
        >
          <a
            href={`https://cdn.jsdelivr.net/npm/@ridi/web-icons@${version}/svgs/${snakeCase(name)}.svg`}
            target="_blank"
          >
            <Icon width="48" height="48" />
          </a>
          <div style={{ fontSize: '12px', userSelect: 'all' }}>{name}</div>
        </div>
      </div>
    );
  })}
</div>;
```
