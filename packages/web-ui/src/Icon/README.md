```jsx
const icons = require('@ridi/web-icons/dist/icons');

<div>
  {
    Object.keys(icons).map((name) => (
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
