# @ridi/web-icons

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
        <a
          href={`https://cdn.jsdelivr.net/npm/@ridi/web-icons@${version}/svgs/${snakeCase(name)}.svg`}
          target="_blank"
          style={{
            display: 'inline-block',
            color: 'black',
            textAlign: 'center',
            textDecoration: 'none',
          }}
        >
          <Icon width="48" height="48" />
          <div style={{ fontSize: '12px' }}>{name}</div>
        </a>
      </div>
    );
  })}
</div>;
```
