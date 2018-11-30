```jsx
const svgs = require('@ridi/web-icons');

<div>
  {
    Object.keys(svgs).map((name) => (
      <div
        key={name} 
        style={{
          margin: '10px',
          display: 'inline-block',
          textAlign: 'center',
        }}
      >
        <Icon name={name} />
        <div style={{ fontSize: '12px' }}>{name}</div>
      </div>
    ))
  }
</div>
```
