### Basic Usage
```jsx
<Pagination
  currentPage={12}
  totalPageCount={25}
  visiblePageCount={9}
  showFirstButton
  showLastButton
  showPrevButton
  showNextButton
  renderButton={({ type, page, ...restProps }) => ( // props: { type, page, children }
    <Pagination.Button
      {...restProps}
      render="a"
      href={`#url-to-page?page=${page}`}
    />
  )}
/>
```
