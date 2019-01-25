# @ridi/colors

## Install
```bash
$ npm install @ridi/colors
```

## Usage
```js static
const colors = require('@ridi/colors');
const hex = require('@ridi/colors/hex.json');
const rgb = require('@ridi/colors/rgb.json');
const hsl = require('@ridi/colors/hsl.json');
const hwb = require('@ridi/colors/hwb.json');

colors.dogerBlue5; // #EBF6FF
hex.dogerBlue5; // #EBF6FF
rgb.dogerBlue5; // rgb(235, 246, 255)
hsl.dogerBlue5; // hsl(207, 100%, 96%)
hwb.dogerBlue5; // hwb(207, 92%, 0%)
```

## Colors
```jsx
const colors = require('@ridi/colors'); // Same as `@ridi/colors/hex.json`.
const hex = require('@ridi/colors/hex.json');
const rgb = require('@ridi/colors/rgb.json');
const hsl = require('@ridi/colors/hsl.json');
const hwb = require('@ridi/colors/hwb.json');

const Color = require('color');

<div>
  {Object.keys(colors).map((name) => {
    const color = Color(colors[name]);

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px',
          color: color.isLight() ? 'black' : 'white',
          backgroundColor: color,
        }}
      >
        <div
          style={{
            flex: 1,
            userSelect: 'all',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          {name}
        </div>

        <div style={{ fontSize: '10px', textAlign: 'right' }}>
          <div style={{ userSelect: 'all' }}>{hex[name]}</div>
          <div style={{ userSelect: 'all' }}>{rgb[name]}</div>
          <div style={{ userSelect: 'all' }}>{hsl[name]}</div>
          <div style={{ userSelect: 'all' }}>{hwb[name]}</div>
        </div>
      </div>
    );
  })}
</div>;
```
