# @ridi/colors

## Install
```bash
$ npm install @ridi/colors
```

## Usage
```js static
import colors from '@ridi/colors';
import hex from '@ridi/colors/hex.json';
import rgb from '@ridi/colors/rgb.json';
import hsl from '@ridi/colors/hsl.json';
import hwb from '@ridi/colors/hwb.json';

colors.dogerBlue5; // #EBF6FF
hex.dogerBlue5; // #EBF6FF
rgb.dogerBlue5; // rgb(235, 246, 255)
hsl.dogerBlue5; // hsl(207, 100%, 96%)
hwb.dogerBlue5; // hwb(207, 92%, 0%)
```

## Colors
```jsx
import colors from '@ridi/colors';
import hex from '@ridi/colors/hex.json';
import rgb from '@ridi/colors/rgb.json';
import hsl from '@ridi/colors/hsl.json';
import hwb from '@ridi/colors/hwb.json';

import Color from 'color';

<div>
  {Object.keys(colors).map((name) => {
    const color = Color(colors[name]);

    return (
      <div
        key={name}
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
