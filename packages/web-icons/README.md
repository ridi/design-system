# @ridi/web-icons

## Install

```bash
$ npm install @ridi/web-icons
```

## Usage

With [`url-loader`](https://www.npmjs.com/package/url-loader):
```jsx static
import { CheckboxCircle } from '@ridi/web-icons';

<img src={CheckboxCircle} />
```

With [SVGR](https://github.com/smooth-code/svgr):
```jsx static
import { CheckboxCircle } from '@ridi/web-icons';

<CheckboxCircle />
```

## Icons

```jsx
import icons from '@ridi/web-icons';
import { version } from '@ridi/web-icons/package.json';
import { snakeCase } from 'lodash';

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
