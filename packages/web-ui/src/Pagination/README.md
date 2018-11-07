### RSG
```jsx
<Pagination
  currentPage={12}
  totalPages={25}
  isMobile={false}
  item={{
    el: 'a',
    getProps: (page) => ({
      href: `/url-to-page?page=${page}`,
    })
  }}
/>
```

### Proposal
```jsx
<Pagination
  currentPage={12}
  totalPageCount={25}
  visiblePageCount={9}
  showFirstButton
  showLastButton
  showPrevButton
  showNextButton
  renderButton={({ type, page, ...restProps }) => ( // props: { type, page, className, children }
    <a {...restProps} href={`/url-to-page?page=${page}`} />
  )}
/>
```
