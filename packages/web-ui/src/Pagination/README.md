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

### Using Render Props
```jsx
<Pagination
  currentPage={12}
  totalPageCount={25}
  visiblePageCount={9}
  showFirstButton
  showLastButton
  showPrevButton
  showNextButton
  renderFirstButton={props => (
    <Button
      {...props}
      render="a"
      href="/url-to-first-page"
    >
      처음
    </Button>
  )}
  renderLastButton={props => (
    <Button
      {...props}
      render="a"
      href="/url-to-last-page"
    >
      마지막
    </Button>
  )}
  renderPrevButton={props => (
    <Button 
      {...props}
      render="a"
      href="/url-to-previous-page"
    >
      <Icon name="arrow_8_left" />
    </Button>
  )}
  renderNextButton={props => (
    <Button
      {...props}
      render="a"
      href="/url-to-next-page"
    >
      <Icon name="arrow_8_right" />
    </Button>
  )}
  renderPageButton={({ page, ...props }) => (
    <Button
      {...props}
      render="a"
      href={`/url-to-page?page=${page}`}
    >
      {page}
    </Button>
  )}
/>
```

### Using Children (with static Components)
```jsx
// Pages should be calculated from the outside of the component.
const pages = getPages();
const currentPage = getCurrentPage();

<Pagination>
  <Pagination.Button
    render="a"
    href="/url-to-first-page"
    first
  >
    처음
  </Pagination.Button>

  <Pagination.Button 
    render="a"
    href="/url-to-previous-page"
    previous
  >
    <Icon name="arrow_8_left" />
  </Pagination.Button>

  {pages.map(page => (
    <Pagination.Button
      key={page}
      render="a"
      href={`/url-to-page?page=${page}`}
      active={page === currentPage}
    >
      {page}
    </Pagination.Button>
  ))}

  <Pagination.Button
    render="a"
    href="/url-to-next-page"
    next
  >
    <Icon name="arrow_8_right" />
  </Pagination.Button>

  <Pagination.Button
    render="a"
    href="/url-to-last-page"
    last
  >
    마지막
  </Pagination.Button>
</Pagination>
```
